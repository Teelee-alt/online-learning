'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { BookOpen, CheckCircle, Clock, Users, Star, Send, ArrowRight, Award } from 'lucide-react';

export default function CourseLearnPage() {
  const [currentModule, setCurrentModule] = useState(0);
  const [completedModules, setCompletedModules] = useState(0);
  const [showCompletionForm, setShowCompletionForm] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState(5);
  const [userInfo, setUserInfo] = useState({
    fullName: '',
    email: '',
    country: '',
    city: '',
    whatsapp: '',
  });

  const modules = [
    { id: 1, title: 'Course Introduction', duration: '15 min', completed: true },
    { id: 2, title: 'Core Concepts', duration: '45 min', completed: true },
    { id: 3, title: 'Practical Examples', duration: '60 min', completed: true },
    { id: 4, title: 'Advanced Topics', duration: '50 min', completed: false },
    { id: 5, title: 'Final Project', duration: '90 min', completed: false },
  ];

  const progressPercentage = (completedModules / modules.length) * 100;

  const handleCompleteModule = () => {
    if (currentModule < modules.length - 1) {
      setCompletedModules(completedModules + 1);
      setCurrentModule(currentModule + 1);
    } else {
      setShowCompletionForm(true);
    }
  };

  const handleCourseCompletion = async () => {
    const completionData = {
      ...userInfo,
      course: 'Web Development',
      level: 'Diploma',
      score: Math.round(progressPercentage),
      startDate: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      finishDate: new Date().toISOString().split('T')[0],
      feedback,
      rating,
    };

    console.log('[v0] Course completion data:', completionData);
    alert('Course completion recorded! Admin will be notified.');
    setShowCompletionForm(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <Link href="/courses" className="flex items-center gap-2 hover:opacity-80">
              <BookOpen className="w-6 h-6 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">Edusanna</span>
            </Link>
            <div className="flex gap-2">
              <Link href="/dashboard">
                <Button variant="outline">My Dashboard</Button>
              </Link>
              <Link href="/">
                <Button variant="ghost">Logout</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Course Content */}
          <div className="lg:col-span-2">
            <Card className="mb-6">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-2xl mb-2">Web Development Masterclass</CardTitle>
                    <p className="text-gray-600">Learn to build modern web applications from scratch</p>
                  </div>
                  <Badge className="bg-green-100 text-green-800">Diploma Level</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <Label>Course Progress</Label>
                      <span className="text-sm font-medium">{Math.round(progressPercentage)}%</span>
                    </div>
                    <Progress value={progressPercentage} className="h-2" />
                  </div>

                  <div className="bg-blue-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-4">{modules[currentModule].title}</h3>
                    <div className="space-y-4 mb-6">
                      <p className="text-gray-700">
                        This module covers essential concepts and practical skills needed to master this topic. Watch the video content, complete the exercises, and test your knowledge with the quiz.
                      </p>
                      <div className="bg-white rounded-lg p-4 space-y-3">
                        <div className="flex gap-2">
                          <Clock className="w-5 h-5 text-blue-600" />
                          <span className="text-sm">Duration: {modules[currentModule].duration}</span>
                        </div>
                        <div className="flex gap-2">
                          <Users className="w-5 h-5 text-blue-600" />
                          <span className="text-sm">2,340 students enrolled</span>
                        </div>
                      </div>
                    </div>

                    <Button onClick={handleCompleteModule} size="lg" className="w-full">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      {currentModule === modules.length - 1 ? 'Complete Course' : 'Mark as Complete & Continue'}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar - Modules List */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Course Modules</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {modules.map((module, idx) => (
                    <button
                      key={module.id}
                      onClick={() => setCurrentModule(idx)}
                      className={`w-full text-left p-3 rounded-lg transition ${
                        idx === currentModule
                          ? 'bg-blue-100 border-2 border-blue-600'
                          : 'bg-gray-50 hover:bg-gray-100'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div>
                          {module.completed ? (
                            <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                          ) : (
                            <div className="w-5 h-5 rounded-full border-2 border-gray-300 mt-0.5" />
                          )}
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-sm">{module.title}</p>
                          <p className="text-xs text-gray-600">{module.duration}</p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Completion Form Modal */}
        {showCompletionForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <Card className="w-full max-w-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="w-6 h-6 text-green-600" />
                  Course Completed!
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <Label htmlFor="fullName">Full Name</Label>
                    <Input
                      id="fullName"
                      value={userInfo.fullName}
                      onChange={(e) => setUserInfo({ ...userInfo, fullName: e.target.value })}
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={userInfo.email}
                      onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
                      placeholder="your@email.com"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="country">Country</Label>
                      <Input
                        id="country"
                        value={userInfo.country}
                        onChange={(e) => setUserInfo({ ...userInfo, country: e.target.value })}
                        placeholder="Your country"
                      />
                    </div>
                    <div>
                      <Label htmlFor="city">City</Label>
                      <Input
                        id="city"
                        value={userInfo.city}
                        onChange={(e) => setUserInfo({ ...userInfo, city: e.target.value })}
                        placeholder="Your city"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="whatsapp">WhatsApp Number</Label>
                    <Input
                      id="whatsapp"
                      value={userInfo.whatsapp}
                      onChange={(e) => setUserInfo({ ...userInfo, whatsapp: e.target.value })}
                      placeholder="+1234567890"
                    />
                  </div>
                  <div>
                    <Label htmlFor="rating">Course Rating</Label>
                    <div className="flex gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setRating(star)}
                          className={`p-2 rounded transition ${
                            star <= rating ? 'bg-yellow-100' : 'bg-gray-100'
                          }`}
                        >
                          <Star
                            className={`w-5 h-5 ${
                              star <= rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-400'
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="feedback">Feedback (Optional)</Label>
                    <Textarea
                      id="feedback"
                      value={feedback}
                      onChange={(e) => setFeedback(e.target.value)}
                      placeholder="Share your feedback about this course..."
                      rows={3}
                    />
                  </div>
                  <div className="flex gap-2">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setShowCompletionForm(false)}
                      className="flex-1"
                    >
                      Cancel
                    </Button>
                    <Button
                      type="button"
                      onClick={handleCourseCompletion}
                      className="flex-1"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Submit
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}
