export const AICertificateCourse = {
  // COURSE METADATA & IDENTIFICATION
  id: "artificial-intelligence-basics-certificate",
  title: "Artificial Intelligence Basics (Certificate)",
  description: "A beginner-friendly introduction to artificial intelligence concepts, covering fundamental principles, key applications, and basic implementation strategies. Perfect for those starting their AI journey.",
  duration: "6 weeks",
  timeCommitment: "4-6 hours per week",
  price: 12,
  upgradePrice: 18,
  icon: "🤖",
  badge: "Certificate",
  prerequisite: "No prior experience required",
  
  // MODULE ARCHITECTURE - 6 COMPREHENSIVE MODULES
  modules: [
    // MODULE 1: AI FOUNDATIONS
    {
      id: 1,
      title: "Introduction to Artificial Intelligence",
      content: `# What is Artificial Intelligence?

Artificial Intelligence (AI) refers to computer systems designed to perform tasks that normally require human intelligence. These tasks include learning, reasoning, problem-solving, perception, and language understanding.

## Key Concepts in AI

**Machine Intelligence**: The ability of machines to perform cognitive functions like learning and problem solving. Unlike traditional programming where rules are explicitly coded, AI systems learn patterns from data.

**Narrow AI vs General AI**: 
- **Narrow AI** (also called Weak AI) is designed for specific tasks (like facial recognition or chess playing)
- **General AI** (also called Strong AI) would have human-like cognitive abilities across multiple domains (this remains theoretical)

**Intelligent Agents**: AI systems that perceive their environment and take actions to achieve goals. An agent can be anything that makes decisions, from a simple thermostat to a self-driving car.

## Historical Development of AI

The field of AI began officially in **1956** at the Dartmouth Conference, where the term "artificial intelligence" was coined. Key milestones include:
- **1950s-60s**: Early enthusiasm, development of first neural networks and problem-solving programs
- **1970s**: "AI Winter" - reduced funding due to unmet expectations
- **1980s**: Expert systems become commercially successful
- **1990s**: Machine learning gains prominence
- **2000s-present**: Big data and deep learning revolutionize the field

## Modern AI Applications

Today, AI touches nearly every industry:
- **Healthcare**: Diagnostic assistance, drug discovery
- **Finance**: Fraud detection, algorithmic trading
- **Transportation**: Self-driving vehicles, route optimization
- **Entertainment**: Recommendation systems, content generation
- **Customer Service**: Chatbots, virtual assistants

## The Importance of Data in AI

**Data is the fuel for AI**. AI systems learn by finding patterns in large datasets. The quality and quantity of data directly impact AI performance. Three main types of data used in AI are:
1. **Structured data** (tables, databases)
2. **Unstructured data** (text, images, audio)
3. **Semi-structured data** (JSON, XML files)

AI has already transformed many industries, with **47% of digitally mature organizations** having a defined AI strategy according to recent industry surveys.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What year was the term 'artificial intelligence' officially coined at the Dartmouth Conference?",
          options: ["1945", "1956", "1968", "1972"],
          correctAnswer: 1,
          explanation: "The term 'artificial intelligence' was officially coined in 1956 at the Dartmouth Conference, marking the beginning of AI as a formal field of study."
        },
        {
          id: 2,
          question: "What type of AI is designed for specific tasks like facial recognition?",
          options: ["General AI", "Broad AI", "Narrow AI", "Strong AI"],
          correctAnswer: 2,
          explanation: "Narrow AI (also called Weak AI) is designed for specific, limited tasks and represents all current practical AI applications."
        },
        {
          id: 3,
          question: "According to industry surveys, what percentage of digitally mature organizations have a defined AI strategy?",
          options: ["23%", "35%", "47%", "62%"],
          correctAnswer: 2,
          explanation: "Recent surveys show that 47% of digitally mature organizations have a defined AI strategy, indicating AI's growing importance in business."
        },
        {
          id: 4,
          question: "What are AI systems that perceive their environment and take actions to achieve goals called?",
          options: ["Bots", "Intelligent Agents", "Smart Systems", "Cognitive Computers"],
          correctAnswer: 1,
          explanation: "Intelligent agents are AI systems that perceive their environment through sensors and take actions to achieve specific goals using effectors."
        },
        {
          id: 5,
          question: "Which decade is known as the 'AI Winter' due to reduced funding?",
          options: ["1950s", "1960s", "1970s", "1980s"],
          correctAnswer: 2,
          explanation: "The 1970s are known as the 'AI Winter' because funding and interest in AI research significantly decreased due to unmet expectations."
        },
        {
          id: 6,
          question: "What is often described as 'the fuel for AI' systems?",
          options: ["Processing Power", "Algorithms", "Data", "Programming Languages"],
          correctAnswer: 2,
          explanation: "Data is commonly described as 'the fuel for AI' because AI systems learn patterns and make decisions based on the data they're trained on."
        },
        {
          id: 7,
          question: "Which type of AI would have human-like cognitive abilities across multiple domains?",
          options: ["Narrow AI", "Applied AI", "General AI", "Specific AI"],
          correctAnswer: 2,
          explanation: "General AI (Strong AI) refers to theoretical systems with human-like cognitive abilities across multiple domains, not just specific tasks."
        },
        {
          id: 8,
          question: "What are the three main types of data used in AI?",
          options: ["Text, numbers, images", "Big, medium, small", "Structured, unstructured, semi-structured", "Primary, secondary, tertiary"],
          correctAnswer: 2,
          explanation: "The three main data types in AI are structured (tables), unstructured (text/images), and semi-structured (JSON/XML)."
        },
        {
          id: 9,
          question: "What type of data includes JSON and XML files?",
          options: ["Structured data", "Unstructured data", "Semi-structured data", "Organized data"],
          correctAnswer: 2,
          explanation: "JSON and XML files are examples of semi-structured data, which has some organizational properties but doesn't fit neatly into tables."
        },
        {
          id: 10,
          question: "Which industry application was NOT mentioned in the module?",
          options: ["Healthcare diagnostics", "Financial fraud detection", "Space exploration", "Entertainment recommendations"],
          correctAnswer: 2,
          explanation: "While AI is used in space exploration, it was not specifically mentioned in the module's list of modern AI applications."
        },
        {
          id: 11,
          question: "What do AI systems learn by finding in large datasets?",
          options: ["Rules", "Patterns", "Commands", "Formulas"],
          correctAnswer: 1,
          explanation: "AI systems learn by finding patterns in large datasets, unlike traditional programming where rules are explicitly coded."
        },
        {
          id: 12,
          question: "What distinguishes AI programming from traditional programming?",
          options: ["AI uses more complex code", "AI requires specialized hardware", "AI learns patterns instead of following explicit rules", "AI programs are written in different languages"],
          correctAnswer: 2,
          explanation: "AI learns patterns from data, while traditional programming follows explicitly coded rules for every scenario."
        },
        {
          id: 13,
          question: "Which application uses AI for route optimization?",
          options: ["Healthcare", "Transportation", "Finance", "Entertainment"],
          correctAnswer: 1,
          explanation: "Transportation uses AI for route optimization, helping find the most efficient paths for delivery and travel."
        },
        {
          id: 14,
          question: "What was a commercially successful AI development in the 1980s?",
          options: ["Neural networks", "Deep learning", "Expert systems", "Self-driving cars"],
          correctAnswer: 2,
          explanation: "Expert systems became commercially successful in the 1980s, representing one of the first practical applications of AI technology."
        },
        {
          id: 15,
          question: "What decade saw machine learning gain prominence in AI?",
          options: ["1970s", "1980s", "1990s", "2000s"],
          correctAnswer: 2,
          explanation: "The 1990s saw machine learning gain prominence as a major approach within artificial intelligence research and applications."
        },
        {
          id: 16,
          question: "Which type of data includes images and audio files?",
          options: ["Structured data", "Unstructured data", "Semi-structured data", "Binary data"],
          correctAnswer: 1,
          explanation: "Images and audio files are examples of unstructured data, which doesn't have a predefined data model or organization."
        },
        {
          id: 17,
          question: "What directly impacts AI performance according to the module?",
          options: ["Programming language used", "Quality and quantity of data", "Developer experience", "Hardware color"],
          correctAnswer: 1,
          explanation: "The quality and quantity of data directly impact AI performance since AI systems learn from the data they're trained on."
        },
        {
          id: 18,
          question: "What is an example of structured data?",
          options: ["Email text", "Social media posts", "Database tables", "Photographs"],
          correctAnswer: 2,
          explanation: "Database tables are examples of structured data, which is organized in a predefined format with clear relationships."
        },
        {
          id: 19,
          question: "Which task is NOT typically associated with AI?",
          options: ["Learning", "Reasoning", "Performing routine calculations", "Language understanding"],
          correctAnswer: 2,
          explanation: "While AI can perform calculations, routine calculations are traditionally done by conventional programming, not specifically AI tasks."
        },
        {
          id: 20,
          question: "What percentage range represents the weekly time commitment for this course?",
          options: ["1-3 hours", "4-6 hours", "7-9 hours", "10-12 hours"],
          correctAnswer: 1,
          explanation: "The course requires a weekly time commitment of 4-6 hours to complete all modules and activities successfully."
        }
      ]
    },

    // MODULE 2: MACHINE LEARNING FUNDAMENTALS
    {
      id: 2,
      title: "Machine Learning Fundamentals",
      content: `# Introduction to Machine Learning

Machine Learning (ML) is a subset of AI that enables systems to learn and improve from experience without being explicitly programmed. Instead of following static program instructions, ML algorithms build mathematical models based on sample data.

## Core Concepts in Machine Learning

**Training Data**: The dataset used to teach an ML model. Typically, **70-80%** of available data is used for training.

**Testing Data**: Separate data used to evaluate how well the model performs on unseen information. Usually **20-30%** of data is reserved for testing.

**Features**: Individual measurable properties or characteristics of the data being observed. For example, in housing price prediction, features might include square footage, number of bedrooms, and location.

**Labels**: The output or answer we want to predict. In supervised learning, each training example has a corresponding label.

## Types of Machine Learning

**1. Supervised Learning**: The algorithm learns from labeled training data, making predictions based on past examples.
- **Classification**: Predicting discrete categories (spam/not spam, disease/no disease)
- **Regression**: Predicting continuous values (house prices, temperature forecasts)

**2. Unsupervised Learning**: The algorithm finds patterns in unlabeled data without pre-existing labels.
- **Clustering**: Grouping similar items together (customer segmentation, document organization)
- **Association**: Discovering rules that describe relationships (market basket analysis)

**3. Reinforcement Learning**: The algorithm learns through trial and error, receiving rewards or penalties for actions.
- Used in game playing, robotics, and resource management

## Common Machine Learning Algorithms

**Linear Regression**: Predicts continuous values by finding the best-fitting straight line through data points. Widely used for forecasting and trend analysis.

**Decision Trees**: Model decisions and their possible consequences using a tree-like structure. Easy to interpret and visualize.

**K-Nearest Neighbors (KNN)**: Classifies data points based on how closely they resemble their neighbors. Simple but effective for many problems.

**Neural Networks**: Inspired by the human brain, these consist of interconnected nodes (neurons) organized in layers. The basis for deep learning.

## The Machine Learning Workflow

A typical ML project follows these steps:
1. **Data Collection**: Gather relevant data from various sources
2. **Data Preprocessing**: Clean and prepare data (handling missing values, normalization)
3. **Feature Engineering**: Select and transform features for better model performance
4. **Model Selection**: Choose appropriate algorithms for the problem
5. **Training**: Teach the model using training data
6. **Evaluation**: Test the model using testing data
7. **Deployment**: Implement the model in real-world applications
8. **Monitoring**: Continuously assess model performance and retrain as needed

## Model Evaluation Metrics

**Accuracy**: Percentage of correct predictions. Simple but can be misleading with imbalanced datasets.

**Precision**: Of all positive predictions, how many were actually positive? Important when false positives are costly.

**Recall**: Of all actual positives, how many did we correctly identify? Important when false negatives are costly.

**F1 Score**: Harmonic mean of precision and recall, providing a single metric that balances both.

According to industry analysis, **supervised learning accounts for approximately 70%** of all machine learning applications in business settings today.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What percentage of available data is typically used for training machine learning models?",
          options: ["50-60%", "70-80%", "85-90%", "95-100%"],
          correctAnswer: 1,
          explanation: "Typically, 70-80% of available data is used for training machine learning models, with the remainder reserved for testing."
        },
        {
          id: 2,
          question: "What type of machine learning uses labeled training data?",
          options: ["Unsupervised Learning", "Supervised Learning", "Reinforcement Learning", "Deep Learning"],
          correctAnswer: 1,
          explanation: "Supervised learning uses labeled training data where each example has a corresponding correct answer or label."
        },
        {
          id: 3,
          question: "According to industry analysis, what percentage of business ML applications use supervised learning?",
          options: ["45%", "55%", "70%", "85%"],
          correctAnswer: 2,
          explanation: "Supervised learning accounts for approximately 70% of all machine learning applications in business settings according to industry analysis."
        },
        {
          id: 4,
          question: "What type of ML algorithm finds patterns in unlabeled data?",
          options: ["Supervised Learning", "Unsupervised Learning", "Reinforcement Learning", "Transfer Learning"],
          correctAnswer: 1,
          explanation: "Unsupervised learning algorithms find patterns, relationships, or structures in data that doesn't have pre-existing labels."
        },
        {
          id: 5,
          question: "What are individual measurable properties of data called in machine learning?",
          options: ["Labels", "Features", "Attributes", "Variables"],
          correctAnswer: 1,
          explanation: "Features are individual measurable properties or characteristics of the data being observed in machine learning."
        },
        {
          id: 6,
          question: "Which algorithm predicts continuous values by finding the best-fitting straight line?",
          options: ["Decision Tree", "Linear Regression", "K-Nearest Neighbors", "Neural Network"],
          correctAnswer: 1,
          explanation: "Linear regression predicts continuous values by finding the best-fitting straight line through data points."
        },
        {
          id: 7,
          question: "What is the harmonic mean of precision and recall called?",
          options: ["Accuracy Score", "F1 Score", "R2 Score", "Mean Squared Error"],
          correctAnswer: 1,
          explanation: "The F1 score is the harmonic mean of precision and recall, providing a balanced single metric that considers both."
        },
        {
          id: 8,
          question: "Which evaluation metric is important when false negatives are costly?",
          options: ["Precision", "Recall", "Accuracy", "Specificity"],
          correctAnswer: 1,
          explanation: "Recall (sensitivity) is important when false negatives are costly because it measures how many actual positives were correctly identified."
        },
        {
          id: 9,
          question: "What type of supervised learning predicts discrete categories?",
          options: ["Regression", "Classification", "Clustering", "Association"],
          correctAnswer: 1,
          explanation: "Classification is a type of supervised learning that predicts discrete categories or classes."
        },
        {
          id: 10,
          question: "Which ML type learns through trial and error with rewards/penalties?",
          options: ["Supervised Learning", "Unsupervised Learning", "Reinforcement Learning", "Semi-supervised Learning"],
          correctAnswer: 2,
          explanation: "Reinforcement learning involves an agent learning through trial and error, receiving rewards for good actions and penalties for bad ones."
        },
        {
          id: 11,
          question: "What are the outputs we want to predict in supervised learning called?",
          options: ["Features", "Labels", "Attributes", "Variables"],
          correctAnswer: 1,
          explanation: "In supervised learning, labels are the outputs or answers we want the model to predict based on input features."
        },
        {
          id: 12,
          question: "Which unsupervised learning technique groups similar items together?",
          options: ["Classification", "Regression", "Clustering", "Association"],
          correctAnswer: 2,
          explanation: "Clustering is an unsupervised learning technique that groups similar items together based on their characteristics."
        },
        {
          id: 13,
          question: "What is the first step in a typical machine learning workflow?",
          options: ["Model Selection", "Data Collection", "Data Preprocessing", "Feature Engineering"],
          correctAnswer: 1,
          explanation: "Data collection is typically the first step in a machine learning workflow, where relevant data is gathered from various sources."
        },
        {
          id: 14,
          question: "Which algorithm uses a tree-like structure for decision modeling?",
          options: ["Linear Regression", "Decision Tree", "K-Nearest Neighbors", "Neural Network"],
          correctAnswer: 1,
          explanation: "Decision trees model decisions and their possible consequences using a tree-like structure that's easy to interpret."
        },
        {
          id: 15,
          question: "What evaluation metric can be misleading with imbalanced datasets?",
          options: ["Precision", "Recall", "Accuracy", "F1 Score"],
          correctAnswer: 2,
          explanation: "Accuracy can be misleading with imbalanced datasets because a model could achieve high accuracy by simply predicting the majority class."
        },
        {
          id: 16,
          question: "What percentage of data is typically reserved for testing ML models?",
          options: ["5-10%", "20-30%", "40-50%", "60-70%"],
          correctAnswer: 1,
          explanation: "Typically, 20-30% of available data is reserved for testing machine learning models to evaluate their performance on unseen data."
        },
        {
          id: 17,
          question: "Which step involves cleaning and preparing data in the ML workflow?",
          options: ["Data Collection", "Data Preprocessing", "Model Selection", "Model Deployment"],
          correctAnswer: 1,
          explanation: "Data preprocessing involves cleaning and preparing data, including handling missing values and normalization."
        },
        {
          id: 18,
          question: "What type of supervised learning predicts continuous values?",
          options: ["Classification", "Regression", "Clustering", "Association"],
          correctAnswer: 1,
          explanation: "Regression is a type of supervised learning that predicts continuous numerical values rather than discrete categories."
        },
        {
          id: 19,
          question: "Which algorithm classifies data points based on similarity to neighbors?",
          options: ["Linear Regression", "Decision Tree", "K-Nearest Neighbors", "Neural Network"],
          correctAnswer: 2,
          explanation: "K-Nearest Neighbors (KNN) classifies data points based on how closely they resemble their nearest neighbors in the feature space."
        },
        {
          id: 20,
          question: "What is the final step in the machine learning workflow?",
          options: ["Model Training", "Model Evaluation", "Model Deployment", "Model Monitoring"],
          correctAnswer: 3,
          explanation: "Model monitoring is the ongoing final step where model performance is continuously assessed and the model is retrained as needed."
        }
      ]
    },

    // MODULE 3: NEURAL NETWORKS AND DEEP LEARNING
    {
      id: 3,
      title: "Neural Networks and Deep Learning",
      content: `# Introduction to Neural Networks

Neural Networks are computing systems inspired by the biological neural networks in animal brains. They consist of interconnected nodes (neurons) organized in layers that process information using a connectionist approach.

## Basic Structure of Neural Networks

**Neurons (Nodes)**: The fundamental processing units. Each neuron receives input, processes it, and passes output to connected neurons.

**Layers**: Neurons are organized in layers:
- **Input Layer**: Receives the initial data
- **Hidden Layers**: Process data between input and output (can be multiple)
- **Output Layer**: Produces the final result

**Connections (Weights)**: Links between neurons that have adjustable strengths. Learning occurs by adjusting these weights.

**Bias**: An additional parameter that allows adjusting the output along with the weighted sum of inputs.

## Activation Functions

Activation functions determine whether a neuron should be activated (fire) based on weighted input. Common activation functions include:

**Sigmoid**: Maps values to a range between 0 and 1. Useful for probability outputs but suffers from vanishing gradient problems.

**ReLU (Rectified Linear Unit)**: Returns 0 for negative inputs and the input value for positive inputs. Most popular in hidden layers due to computational efficiency.

**Tanh**: Similar to sigmoid but maps values between -1 and 1. Often used in recurrent networks.

**Softmax**: Converts a vector of numbers into a probability distribution. Used in the output layer for multi-class classification.

## Deep Learning Basics

Deep Learning refers to neural networks with **three or more hidden layers**. The "deep" in deep learning refers to the depth of layers, not necessarily the complexity of concepts.

**Key Advantages of Deep Learning**:
- Automatic feature extraction (learns relevant features from raw data)
- Handles unstructured data exceptionally well (images, text, audio)
- State-of-the-art performance in many domains

**Challenges**:
- Requires large amounts of data
- Computationally intensive
- "Black box" nature makes interpretation difficult

## Types of Neural Networks

**Feedforward Neural Networks**: Information flows in one direction from input to output. The simplest type of artificial neural network.

**Convolutional Neural Networks (CNNs)**: Specialized for processing grid-like data such as images. Use convolutional layers to detect spatial hierarchies of features.

**Recurrent Neural Networks (RNNs)**: Designed for sequential data (time series, text, speech). Have connections that form directed cycles, allowing information persistence.

**Transformers**: Attention-based architectures that have revolutionized natural language processing. Enable parallel processing of sequences.

## The Training Process: Forward and Backward Propagation

**Forward Propagation**: Input data is passed through the network layer by layer to produce an output.

**Loss Calculation**: The difference between predicted output and actual target is measured using a loss function.

**Backward Propagation (Backpropagation)**: The loss is propagated backward through the network, and weights are adjusted to minimize loss.

**Gradient Descent**: Optimization algorithm that minimizes the loss function by iteratively moving toward the steepest descent.

## Applications of Deep Learning

**Computer Vision**: Image classification, object detection, facial recognition (used by **94%** of major tech companies)

**Natural Language Processing**: Language translation, sentiment analysis, chatbots

**Speech Recognition**: Voice assistants, transcription services

**Autonomous Systems**: Self-driving vehicles, robotics

**Healthcare**: Medical image analysis, drug discovery

Research indicates that **deep learning models have achieved human-level performance** in specific tasks like image recognition and game playing, with error rates dropping from approximately 26% to less than 3% over the past decade.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "How many hidden layers are typically required for a network to be considered 'deep learning'?",
          options: ["One or more", "Two or more", "Three or more", "Five or more"],
          correctAnswer: 2,
          explanation: "Deep learning typically refers to neural networks with three or more hidden layers, allowing for more complex feature extraction."
        },
        {
          id: 2,
          question: "What percentage of major tech companies use deep learning for computer vision applications?",
          options: ["74%", "84%", "94%", "98%"],
          correctAnswer: 2,
          explanation: "Approximately 94% of major tech companies use deep learning for computer vision applications like image classification and facial recognition."
        },
        {
          id: 3,
          question: "Which layer receives the initial data in a neural network?",
          options: ["Hidden Layer", "Output Layer", "Input Layer", "Processing Layer"],
          correctAnswer: 2,
          explanation: "The input layer is the first layer that receives the initial data or features in a neural network."
        },
        {
          id: 4,
          question: "What is the most popular activation function for hidden layers due to computational efficiency?",
          options: ["Sigmoid", "Tanh", "ReLU", "Softmax"],
          correctAnswer: 2,
          explanation: "ReLU (Rectified Linear Unit) is most popular in hidden layers due to its computational efficiency and mitigation of vanishing gradient problems."
        },
        {
          id: 5,
          question: "What type of neural network is specialized for processing grid-like data such as images?",
          options: ["Feedforward NN", "Convolutional NN", "Recurrent NN", "Transformer"],
          correctAnswer: 1,
          explanation: "Convolutional Neural Networks (CNNs) are specifically designed for processing grid-like data such as images, using convolutional layers."
        },
        {
          id: 6,
          question: "What has deep learning error rates in image recognition dropped to over the past decade?",
          options: ["From 50% to 10%", "From 40% to 15%", "From 26% to less than 3%", "From 15% to 2%"],
          correctAnswer: 2,
          explanation: "Deep learning error rates in image recognition have dropped from approximately 26% to less than 3% over the past decade."
        },
        {
          id: 7,
          question: "Which activation function converts a vector into a probability distribution?",
          options: ["Sigmoid", "Tanh", "ReLU", "Softmax"],
          correctAnswer: 3,
          explanation: "Softmax converts a vector of numbers into a probability distribution, making it ideal for multi-class classification output layers."
        },
        {
          id: 8,
          question: "What are the adjustable strengths between neurons called?",
          options: ["Biases", "Weights", "Gradients", "Activation values"],
          correctAnswer: 1,
          explanation: "Weights are the adjustable connection strengths between neurons in a neural network that are modified during training."
        },
        {
          id: 9,
          question: "Which type of neural network is designed for sequential data like time series?",
          options: ["Feedforward NN", "Convolutional NN", "Recurrent NN", "Perceptron"],
          correctAnswer: 2,
          explanation: "Recurrent Neural Networks (RNNs) are designed for sequential data, with connections that allow information to persist."
        },
        {
          id: 10,
          question: "What is the process of adjusting weights based on loss calculation called?",
          options: ["Forward Propagation", "Backward Propagation", "Weight Initialization", "Feature Extraction"],
          correctAnswer: 1,
          explanation: "Backward propagation (backpropagation) is the process where loss is propagated backward and weights are adjusted to minimize error."
        },
        {
          id: 11,
          question: "Which neural network architecture uses attention mechanisms for parallel sequence processing?",
          options: ["CNN", "RNN", "Transformer", "Perceptron"],
          correctAnswer: 2,
          explanation: "Transformers use attention mechanisms that enable parallel processing of sequences, revolutionizing natural language processing."
        },
        {
          id: 12,
          question: "What is an additional parameter that adjusts output along with weighted sum?",
          options: ["Weight", "Bias", "Activation", "Gradient"],
          correctAnswer: 1,
          explanation: "Bias is an additional parameter in neurons that allows adjusting the output along with the weighted sum of inputs."
        },
        {
          id: 13,
          question: "Which activation function maps values between -1 and 1?",
          options: ["Sigmoid", "Tanh", "ReLU", "Softmax"],
          correctAnswer: 1,
          explanation: "Tanh (hyperbolic tangent) activation function maps values between -1 and 1, often used in recurrent networks."
        },
        {
          id: 14,
          question: "What is the fundamental processing unit in a neural network?",
          options: ["Layer", "Neuron", "Weight", "Bias"],
          correctAnswer: 1,
          explanation: "The neuron (or node) is the fundamental processing unit in a neural network that receives input, processes it, and produces output."
        },
        {
          id: 15,
          question: "Which optimization algorithm minimizes loss by moving toward steepest descent?",
          options: ["Forward Propagation", "Backpropagation", "Gradient Descent", "Weight Adjustment"],
          correctAnswer: 2,
          explanation: "Gradient descent is an optimization algorithm that minimizes the loss function by iteratively moving toward the steepest descent."
        },
        {
          id: 16,
          question: "What type of data do deep learning models handle exceptionally well?",
          options: ["Structured data only", "Unstructured data", "Numerical data only", "Tabular data"],
          correctAnswer: 1,
          explanation: "Deep learning models handle unstructured data (images, text, audio) exceptionally well through automatic feature extraction."
        },
        {
          id: 17,
          question: "What is the simplest type of artificial neural network?",
          options: ["CNN", "RNN", "Feedforward NN", "Transformer"],
          correctAnswer: 2,
          explanation: "Feedforward neural networks are the simplest type, with information flowing in one direction from input to output layers."
        },
        {
          id: 18,
          question: "Which layer produces the final result in a neural network?",
          options: ["Input Layer", "Hidden Layer", "Output Layer", "Processing Layer"],
          correctAnswer: 2,
          explanation: "The output layer produces the final result or prediction of the neural network after processing through all layers."
        },
        {
          id: 19,
          question: "What challenge refers to the difficulty of interpreting how deep learning models make decisions?",
          options: ["Data requirement", "Computational intensity", "Black box nature", "Overfitting tendency"],
          correctAnswer: 2,
          explanation: "The 'black box' nature of deep learning refers to the difficulty in interpreting how models arrive at their decisions."
        },
        {
          id: 20,
          question: "What does ReLU return for negative input values?",
          options: ["The negative value", "Zero", "Absolute value", "Sigmoid of value"],
          correctAnswer: 1,
          explanation: "ReLU (Rectified Linear Unit) returns 0 for negative input values and the input value itself for positive inputs."
        }
      ]
    },

    // MODULE 4: NATURAL LANGUAGE PROCESSING
    {
      id: 4,
      title: "Natural Language Processing Fundamentals",
      content: `# Introduction to Natural Language Processing

Natural Language Processing (NLP) is a branch of AI that focuses on enabling computers to understand, interpret, and generate human language. NLP combines computational linguistics with machine learning to process and analyze large amounts of natural language data.

## Key NLP Tasks

**Text Classification**: Categorizing text into predefined groups (spam detection, sentiment analysis, topic labeling).

**Named Entity Recognition (NER)**: Identifying and classifying key information in text (person names, organizations, locations, dates).

**Part-of-Speech Tagging**: Labeling each word with its grammatical role (noun, verb, adjective, etc.).

**Machine Translation**: Automatically translating text from one language to another (Google Translate, DeepL).

**Text Generation**: Creating human-like text based on input prompts or patterns.

**Question Answering**: Extracting answers to questions from text documents or knowledge bases.

**Speech Recognition**: Converting spoken language into text (voice assistants, transcription services).

## Fundamental NLP Concepts

**Tokenization**: Breaking text into smaller units (tokens) such as words, subwords, or characters. The first step in most NLP pipelines.

**Stemming and Lemmatization**: Reducing words to their base or root form.
- **Stemming**: Uses heuristic rules (e.g., 'running' → 'run')
- **Lemmatization**: Uses vocabulary and morphological analysis (e.g., 'better' → 'good')

**Stop Words**: Common words that are often filtered out (the, is, at, which, on). Removal can improve processing efficiency.

**Bag of Words**: A simple representation where text is represented as a collection of words, ignoring grammar and word order.

**TF-IDF (Term Frequency-Inverse Document Frequency)**: Statistical measure that evaluates word importance in a document relative to a collection.

## Word Embeddings

Word embeddings represent words as dense vectors in a continuous vector space where semantically similar words are close together.

**Word2Vec**: Popular embedding method that learns word associations from large text corpora using neural networks.

**GloVe (Global Vectors)**: Combines matrix factorization with local context window methods.

**FastText**: Extends Word2Vec by representing words as bags of character n-grams, handling out-of-vocabulary words better.

**Contextual Embeddings**: Modern approaches like BERT that generate different embeddings for the same word based on context.

## Modern NLP Architectures

**Transformers**: Architecture that uses self-attention mechanisms to process all words in a sequence simultaneously rather than sequentially.

**BERT (Bidirectional Encoder Representations from Transformers)**: Pre-trained model that understands context from both left and right directions.

**GPT (Generative Pre-trained Transformer)**: Autoregressive model that generates human-like text by predicting the next word in a sequence.

**T5 (Text-to-Text Transfer Transformer)**: Treats every NLP problem as a text-to-text problem using the same model architecture.

## NLP Applications and Impact

**Chatbots and Virtual Assistants**: Handle customer queries, provide information, and assist with tasks. Used by **85%** of customer service operations.

**Sentiment Analysis**: Determines emotional tone in text (positive, negative, neutral). Valuable for brand monitoring and market research.

**Text Summarization**: Creates concise summaries of longer documents while preserving key information.

**Language Translation Services**: Enable cross-language communication with **near-human accuracy** in many language pairs.

**Content Moderation**: Automatically detects inappropriate or harmful content on social platforms.

**Healthcare Documentation**: Transcribes and structures medical notes from doctor-patient conversations.

The global NLP market is projected to grow from **$20 billion in 2022 to over $160 billion by 2030**, indicating rapid adoption across industries. Accuracy in sentiment analysis has improved from approximately 70% to over 90% with modern deep learning approaches.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What percentage of customer service operations use chatbots or virtual assistants?",
          options: ["65%", "75%", "85%", "95%"],
          correctAnswer: 2,
          explanation: "Approximately 85% of customer service operations use chatbots or virtual assistants powered by NLP technology."
        },
        {
          id: 2,
          question: "What is the first step in most NLP pipelines?",
          options: ["Stemming", "Tokenization", "Stop word removal", "Part-of-speech tagging"],
          correctAnswer: 1,
          explanation: "Tokenization, breaking text into smaller units like words or subwords, is typically the first step in NLP pipelines."
        },
        {
          id: 3,
          question: "What is the projected growth of the global NLP market from 2022 to 2030?",
          options: ["From $10B to $80B", "From $20B to $160B", "From $30B to $200B", "From $40B to $250B"],
          correctAnswer: 1,
          explanation: "The global NLP market is projected to grow from $20 billion in 2022 to over $160 billion by 2030."
        },
        {
          id: 4,
          question: "Which NLP task involves identifying person names, organizations, and locations in text?",
          options: ["Text Classification", "Named Entity Recognition", "Part-of-Speech Tagging", "Machine Translation"],
          correctAnswer: 1,
          explanation: "Named Entity Recognition (NER) involves identifying and classifying key information like person names, organizations, and locations."
        },
        {
          id: 5,
          question: "What architecture uses self-attention mechanisms to process all words simultaneously?",
          options: ["RNN", "LSTM", "Transformer", "CNN"],
          correctAnswer: 2,
          explanation: "Transformers use self-attention mechanisms to process all words in a sequence simultaneously rather than sequentially."
        },
        {
          id: 6,
          question: "What has sentiment analysis accuracy improved to with modern deep learning approaches?",
          options: ["From 60% to 80%", "From 70% to over 90%", "From 80% to 95%", "From 85% to 98%"],
          correctAnswer: 1,
          explanation: "Accuracy in sentiment analysis has improved from approximately 70% to over 90% with modern deep learning approaches."
        },
        {
          id: 7,
          question: "Which word embedding method represents words as bags of character n-grams?",
          options: ["Word2Vec", "GloVe", "FastText", "BERT"],
          correctAnswer: 2,
          explanation: "FastText extends Word2Vec by representing words as bags of character n-grams, better handling out-of-vocabulary words."
        },
        {
          id: 8,
          question: "What does BERT stand for in NLP?",
          options: ["Bidirectional Encoder Representations from Transformers", "Basic Embedded Representation Techniques", "Binary Encoding for Relational Text", "Biometric Entity Recognition Technology"],
          correctAnswer: 0,
          explanation: "BERT stands for Bidirectional Encoder Representations from Transformers, a pre-trained model that understands context from both directions."
        },
        {
          id: 9,
          question: "What type of words are often filtered out in NLP preprocessing?",
          options: ["Nouns", "Stop words", "Verbs", "Adjectives"],
          correctAnswer: 1,
          explanation: "Stop words (common words like 'the', 'is', 'at') are often filtered out in NLP preprocessing to improve efficiency."
        },
        {
          id: 10,
          question: "Which NLP task categorizes text into predefined groups like spam or not spam?",
          options: ["Named Entity Recognition", "Text Classification", "Machine Translation", "Text Generation"],
          correctAnswer: 1,
          explanation: "Text classification involves categorizing text into predefined groups such as spam/not spam or positive/negative sentiment."
        },
        {
          id: 11,
          question: "What statistical measure evaluates word importance in a document relative to a collection?",
          options: ["Bag of Words", "TF-IDF", "Word Embeddings", "N-grams"],
          correctAnswer: 1,
          explanation: "TF-IDF (Term Frequency-Inverse Document Frequency) evaluates word importance in a document relative to a collection."
        },
        {
          id: 12,
          question: "Which modern NLP model treats every problem as a text-to-text problem?",
          options: ["BERT", "GPT", "T5", "ELMo"],
          correctAnswer: 2,
          explanation: "T5 (Text-to-Text Transfer Transformer) treats every NLP problem as a text-to-text problem using the same model architecture."
        },
        {
          id: 13,
          question: "What process reduces words to their base form using vocabulary and morphological analysis?",
          options: ["Stemming", "Lemmatization", "Tokenization", "Normalization"],
          correctAnswer: 1,
          explanation: "Lemmatization reduces words to their base form using vocabulary and morphological analysis (e.g., 'better' → 'good')."
        },
        {
          id: 14,
          question: "Which NLP application determines emotional tone in text?",
          options: ["Named Entity Recognition", "Sentiment Analysis", "Machine Translation", "Text Summarization"],
          correctAnswer: 1,
          explanation: "Sentiment analysis determines emotional tone in text (positive, negative, neutral), valuable for brand monitoring."
        },
        {
          id: 15,
          question: "What type of embeddings generate different representations for the same word based on context?",
          options: ["Static embeddings", "Contextual embeddings", "Word2Vec embeddings", "GloVe embeddings"],
          correctAnswer: 1,
          explanation: "Contextual embeddings like BERT generate different representations for the same word based on its context in a sentence."
        },
        {
          id: 16,
          question: "Which NLP task involves converting spoken language into text?",
          options: ["Text Generation", "Speech Recognition", "Machine Translation", "Question Answering"],
          correctAnswer: 1,
          explanation: "Speech recognition involves converting spoken language into text, used in voice assistants and transcription services."
        },
        {
          id: 17,
          question: "What simple text representation ignores grammar and word order?",
          options: ["Word Embeddings", "Bag of Words", "Syntax Trees", "Dependency Parsing"],
          correctAnswer: 1,
          explanation: "Bag of Words is a simple representation where text is represented as a collection of words, ignoring grammar and word order."
        },
        {
          id: 18,
          question: "Which pre-trained model generates human-like text by predicting the next word?",
          options: ["BERT", "GPT", "T5", "ELMo"],
          correctAnswer: 1,
          explanation: "GPT (Generative Pre-trained Transformer) is an autoregressive model that generates human-like text by predicting the next word."
        },
        {
          id: 19,
          question: "What NLP task labels each word with its grammatical role?",
          options: ["Named Entity Recognition", "Part-of-Speech Tagging", "Text Classification", "Dependency Parsing"],
          correctAnswer: 1,
          explanation: "Part-of-speech tagging involves labeling each word with its grammatical role (noun, verb, adjective, etc.)."
        },
        {
          id: 20,
          question: "Which word embedding method combines matrix factorization with context window methods?",
          options: ["Word2Vec", "GloVe", "FastText", "BERT"],
          correctAnswer: 1,
          explanation: "GloVe (Global Vectors) combines matrix factorization with local context window methods for creating word embeddings."
        }
      ]
    },

    // MODULE 5: COMPUTER VISION BASICS
    {
      id: 5,
      title: "Computer Vision Fundamentals",
      content: `# Introduction to Computer Vision

Computer Vision (CV) is a field of AI that enables computers to derive meaningful information from digital images, videos, and other visual inputs. It seeks to automate tasks that human visual systems can perform.

## Key Computer Vision Tasks

**Image Classification**: Categorizing entire images into predefined classes (cat vs. dog, car vs. truck). Accuracy has reached **over 98%** on benchmark datasets like ImageNet.

**Object Detection**: Identifying and locating multiple objects within an image, typically drawing bounding boxes around them.

**Semantic Segmentation**: Classifying each pixel in an image to a class, understanding what each pixel represents.

**Instance Segmentation**: Similar to semantic segmentation but distinguishes between different instances of the same class.

**Facial Recognition**: Identifying or verifying a person from a digital image or video frame. Used by over **1 billion** smartphones worldwide.

**Optical Character Recognition (OCR)**: Converting images of typed or handwritten text into machine-encoded text.

**Image Generation**: Creating new images from scratch or based on textual descriptions.

## Fundamental Concepts in Computer Vision

**Pixels**: The smallest addressable elements in a digital image. Each pixel represents color intensity values.

**Color Spaces**: Different representations of color information:
- **RGB**: Red, Green, Blue channels (most common)
- **HSV**: Hue, Saturation, Value (useful for color-based segmentation)
- **Grayscale**: Single channel representing brightness

**Image Filters**: Mathematical operations applied to images:
- **Blurring**: Reduces noise and detail
- **Sharpening**: Enhances edges and details
- **Edge Detection**: Identifies boundaries between regions

**Feature Extraction**: Identifying distinctive patterns or features in images that can be used for analysis.

## Convolutional Neural Networks (CNNs) for Vision

CNNs are the standard architecture for most computer vision tasks due to their ability to capture spatial hierarchies.

**Convolutional Layers**: Apply filters to extract features while preserving spatial relationships.

**Pooling Layers**: Reduce spatial dimensions while retaining important information (Max Pooling, Average Pooling).

**Fully Connected Layers**: Traditional neural network layers used for final classification decisions.

**Activation Layers**: Introduce non-linearity (typically ReLU) to enable learning of complex patterns.

## Popular CNN Architectures

**LeNet-5**: One of the earliest successful CNNs for digit recognition (1998).

**AlexNet**: Revolutionized computer vision in 2012, winning ImageNet competition with significantly lower error rate.

**VGGNet**: Simplified architecture using only 3×3 convolutional filters stacked deeply.

**ResNet**: Introduced residual connections that enable training of very deep networks (152+ layers).

**YOLO (You Only Look Once)**: Real-time object detection system that processes images in a single pass.

## Computer Vision Applications

**Autonomous Vehicles**: Perception systems that detect lanes, traffic signs, pedestrians, and other vehicles. Modern systems process **over 1 terabyte of data per hour**.

**Medical Imaging**: Detecting anomalies in X-rays, MRIs, and CT scans with accuracy matching or exceeding human radiologists in specific tasks.

**Retail**: Automated checkout systems, inventory management, and customer behavior analysis.

**Agriculture**: Crop monitoring, yield prediction, and automated harvesting.

**Security and Surveillance**: Facial recognition, suspicious activity detection, and license plate recognition.

**Augmented Reality**: Overlaying digital information onto the real world through camera views.

## Challenges in Computer Vision

**Variability**: Lighting conditions, viewpoints, occlusions, and background clutter affect performance.

**Scale**: Objects appear at different sizes in images.

**Real-time Processing**: Many applications require immediate analysis and response.

**Data Requirements**: Large labeled datasets are needed for training accurate models.

**Adversarial Attacks**: Small, intentional perturbations to images that can fool vision systems.

The computer vision market is expected to grow from **$11 billion in 2020 to $20 billion by 2025**, driven by increasing adoption across industries. Modern facial recognition systems achieve accuracy rates of **99.97%** under controlled conditions, though performance varies in real-world scenarios.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What accuracy has image classification reached on benchmark datasets like ImageNet?",
          options: ["Over 90%", "Over 95%", "Over 98%", "Over 99%"],
          correctAnswer: 2,
          explanation: "Image classification accuracy has reached over 98% on benchmark datasets like ImageNet with modern deep learning approaches."
        },
        {
          id: 2,
          question: "How many smartphones worldwide use facial recognition technology?",
          options: ["500 million", "750 million", "1 billion", "1.5 billion"],
          correctAnswer: 2,
          explanation: "Facial recognition technology is used by over 1 billion smartphones worldwide for authentication and photography features."
        },
        {
          id: 3,
          question: "What is the expected growth of the computer vision market from 2020 to 2025?",
          options: ["From $5B to $10B", "From $8B to $15B", "From $11B to $20B", "From $15B to $25B"],
          correctAnswer: 2,
          explanation: "The computer vision market is expected to grow from $11 billion in 2020 to $20 billion by 2025."
        },
        {
          id: 4,
          question: "Which computer vision task involves categorizing entire images into predefined classes?",
          options: ["Object Detection", "Image Classification", "Semantic Segmentation", "Instance Segmentation"],
          correctAnswer: 1,
          explanation: "Image classification involves categorizing entire images into predefined classes like 'cat' vs. 'dog' or different vehicle types."
        },
        {
          id: 5,
          question: "What accuracy do modern facial recognition systems achieve under controlled conditions?",
          options: ["97.5%", "98.8%", "99.3%", "99.97%"],
          correctAnswer: 3,
          explanation: "Modern facial recognition systems achieve accuracy rates of 99.97% under controlled conditions with proper lighting and positioning."
        },
        {
          id: 6,
          question: "Which CNN architecture introduced residual connections enabling very deep networks?",
          options: ["LeNet-5", "AlexNet", "VGGNet", "ResNet"],
          correctAnswer: 3,
          explanation: "ResNet introduced residual connections that enable training of very deep networks (152+ layers) by addressing vanishing gradient problems."
        },
        {
          id: 7,
          question: "What is the most common color space used in digital images?",
          options: ["RGB", "HSV", "Grayscale", "CMYK"],
          correctAnswer: 0,
          explanation: "RGB (Red, Green, Blue) is the most common color space used in digital images and computer vision applications."
        },
        {
          id: 8,
          question: "What does OCR stand for in computer vision?",
          options: ["Optical Character Recognition", "Object Classification and Recognition", "Online Character Reading", "Optical Color Recognition"],
          correctAnswer: 0,
          explanation: "OCR stands for Optical Character Recognition, the technology that converts images of text into machine-encoded text."
        },
        {
          id: 9,
          question: "Which layer in CNNs reduces spatial dimensions while retaining important information?",
          options: ["Convolutional Layer", "Pooling Layer", "Fully Connected Layer", "Activation Layer"],
          correctAnswer: 1,
          explanation: "Pooling layers (like Max Pooling) reduce spatial dimensions while retaining the most important information from feature maps."
        },
        {
          id: 10,
          question: "How much data do autonomous vehicle perception systems typically process per hour?",
          options: ["100 gigabytes", "500 gigabytes", "1 terabyte", "5 terabytes"],
          correctAnswer: 2,
          explanation: "Modern autonomous vehicle perception systems process over 1 terabyte of data per hour from various sensors and cameras."
        },
        {
          id: 11,
          question: "Which computer vision task identifies and locates multiple objects with bounding boxes?",
          options: ["Image Classification", "Object Detection", "Semantic Segmentation", "Image Generation"],
          correctAnswer: 1,
          explanation: "Object detection involves identifying and locating multiple objects within an image, typically drawing bounding boxes around them."
        },
        {
          id: 12,
          question: "Which CNN architecture revolutionized computer vision by winning the 2012 ImageNet competition?",
          options: ["LeNet-5", "AlexNet", "VGGNet", "ResNet"],
          correctAnswer: 1,
          explanation: "AlexNet revolutionized computer vision in 2012 by winning the ImageNet competition with significantly lower error rates than previous methods."
        },
        {
          id: 13,
          question: "What color space represents Hue, Saturation, and Value?",
          options: ["RGB", "HSV", "Grayscale", "CMYK"],
          correctAnswer: 1,
          explanation: "HSV (Hue, Saturation, Value) color space is useful for color-based segmentation and certain computer vision tasks."
        },
        {
          id: 14,
          question: "Which real-time object detection system processes images in a single pass?",
          options: ["Faster R-CNN", "Mask R-CNN", "YOLO", "SSD"],
          correctAnswer: 2,
          explanation: "YOLO (You Only Look Once) is a real-time object detection system that processes entire images in a single neural network pass."
        },
        {
          id: 15,
          question: "What is the smallest addressable element in a digital image?",
          options: ["Vector", "Pixel", "Voxel", "Fragment"],
          correctAnswer: 1,
          explanation: "A pixel (picture element) is the smallest addressable element in a digital image, representing color intensity values."
        },
        {
          id: 16,
          question: "Which computer vision task classifies each pixel in an image to a class?",
          options: ["Object Detection", "Image Classification", "Semantic Segmentation", "Instance Segmentation"],
          correctAnswer: 2,
          explanation: "Semantic segmentation involves classifying each pixel in an image to a specific class, understanding what each pixel represents."
        },
        {
          id: 17,
          question: "What type of layer in CNNs applies filters to extract features while preserving spatial relationships?",
          options: ["Convolutional Layer", "Pooling Layer", "Fully Connected Layer", "Activation Layer"],
          correctAnswer: 0,
          explanation: "Convolutional layers apply filters (kernels) to extract features from images while preserving spatial relationships between pixels."
        },
        {
          id: 18,
          question: "Which application uses computer vision for detecting anomalies in medical scans?",
          options: ["Autonomous Vehicles", "Medical Imaging", "Retail", "Agriculture"],
          correctAnswer: 1,
          explanation: "Medical imaging uses computer vision for detecting anomalies in X-rays, MRIs, and CT scans, often matching human expert accuracy."
        },
        {
          id: 19,
          question: "What CNN architecture uses only 3×3 convolutional filters stacked deeply?",
          options: ["LeNet-5", "AlexNet", "VGGNet", "ResNet"],
          correctAnswer: 2,
          explanation: "VGGNet uses a simplified architecture with only 3×3 convolutional filters stacked deeply to create very deep networks."
        },
        {
          id: 20,
          question: "What challenge refers to small intentional perturbations that can fool vision systems?",
          options: ["Variability", "Scale", "Real-time Processing", "Adversarial Attacks"],
          correctAnswer: 3,
          explanation: "Adversarial attacks refer to small, intentional perturbations to images that can fool computer vision systems while being imperceptible to humans."
        }
      ]
    },

    // MODULE 6: ETHICS AND FUTURE OF AI
    {
      id: 6,
      title: "AI Ethics and Future Trends",
      content: `# AI Ethics and Responsible Development

As AI systems become increasingly integrated into society, ethical considerations have become paramount. Responsible AI development focuses on creating systems that are fair, transparent, accountable, and aligned with human values.

## Key Ethical Principles in AI

**Fairness and Bias Mitigation**: Ensuring AI systems don't discriminate against individuals or groups based on protected characteristics. Studies show that **up to 85%** of AI projects risk bias if not properly addressed.

**Transparency and Explainability**: Making AI decision-making processes understandable to users and stakeholders. Often called the "right to explanation."

**Privacy and Data Protection**: Safeguarding personal information used by AI systems, complying with regulations like GDPR.

**Accountability**: Establishing clear responsibility when AI systems cause harm or make erroneous decisions.

**Safety and Reliability**: Ensuring AI systems operate as intended without causing unintended harm.

**Human Oversight**: Maintaining meaningful human control over AI systems, especially in critical applications.

## Common AI Bias Types

**Dataset Bias**: Training data doesn't adequately represent the target population or real-world scenarios.

**Algorithmic Bias**: The learning algorithm itself amplifies or creates biases from the data.

**Measurement Bias**: The way outcomes are measured or labeled introduces bias.

**Deployment Bias**: How and where the system is deployed creates unfair outcomes.

## AI Regulations and Frameworks

**GDPR (EU)**: Includes provisions for automated decision-making and requires explanations for algorithmic decisions affecting individuals.

**Algorithmic Accountability Act (US)**: Proposed legislation requiring impact assessments for high-risk AI systems.

**EU AI Act**: Risk-based regulatory framework categorizing AI systems by risk level with corresponding requirements.

**OECD AI Principles**: International standards promoting trustworthy AI that respects human rights and democratic values.

**IEEE Ethical AI Guidelines**: Technical standards for ethically aligned design of autonomous and intelligent systems.

## Future AI Trends and Developments

**Explainable AI (XAI)**: Developing techniques to make complex AI models more interpretable and transparent. The market for XAI is projected to reach **$21 billion by 2030**.

**AI Governance**: Implementing structures and processes to ensure responsible AI development and deployment across organizations.

**AI for Social Good**: Applying AI to address global challenges like climate change, healthcare accessibility, and poverty reduction.

**Multimodal AI**: Systems that can process and understand multiple types of data simultaneously (text, images, audio, video).

**Neuromorphic Computing**: Hardware designed to mimic the brain's neural structure for more efficient AI processing.

**Quantum Machine Learning**: Combining quantum computing with machine learning to solve currently intractable problems.

## AI and the Future of Work

**Job Transformation**: While AI may automate some tasks, it's expected to create new roles and transform existing ones rather than simply eliminate jobs.

**AI-Augmented Workforce**: Humans and AI systems working together, with AI handling routine tasks and humans focusing on creative, strategic, and interpersonal work.

**Skill Shifts**: Growing demand for AI literacy, data skills, and human skills that complement AI capabilities.

**Economic Impact**: PwC estimates AI could contribute **up to $15.7 trillion** to the global economy by 2030 through productivity gains and consumption-side effects.

## Preparing for an AI-Driven Future

**AI Literacy Education**: Developing basic understanding of AI concepts, capabilities, and limitations across the population.

**Continuous Learning**: Embracing lifelong learning to adapt to rapidly evolving AI technologies.

**Ethical Framework Development**: Creating organizational and societal structures for responsible AI adoption.

**Human-Centered Design**: Prioritizing human needs, values, and experiences in AI system development.

**International Collaboration**: Cooperating across borders to address global AI challenges and establish shared norms.

Surveys indicate that **over 60% of organizations** now have AI ethics committees or oversight boards, reflecting growing awareness of the importance of responsible AI development. The demand for AI ethics professionals has grown by **over 200%** in the past three years as companies recognize the need for specialized expertise in this area.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What percentage of AI projects risk bias if not properly addressed according to studies?",
          options: ["Up to 65%", "Up to 75%", "Up to 85%", "Up to 95%"],
          correctAnswer: 2,
          explanation: "Studies show that up to 85% of AI projects risk bias if not properly addressed through careful design and testing."
        },
        {
          id: 2,
          question: "What is the projected market size for Explainable AI (XAI) by 2030?",
          options: ["$8 billion", "$14 billion", "$21 billion", "$30 billion"],
          correctAnswer: 2,
          explanation: "The market for Explainable AI (XAI) is projected to reach $21 billion by 2030 as demand for transparent AI grows."
        },
        {
          id: 3,
          question: "What percentage of organizations now have AI ethics committees or oversight boards?",
          options: ["Over 40%", "Over 50%", "Over 60%", "Over 70%"],
          correctAnswer: 2,
          explanation: "Surveys indicate that over 60% of organizations now have AI ethics committees or oversight boards to ensure responsible development."
        },
        {
          id: 4,
          question: "Which ethical principle is often called the 'right to explanation'?",
          options: ["Fairness", "Transparency", "Privacy", "Accountability"],
          correctAnswer: 1,
          explanation: "Transparency and explainability in AI are often referred to as the 'right to explanation,' making decisions understandable to affected individuals."
        },
        {
          id: 5,
          question: "How much could AI contribute to the global economy by 2030 according to PwC estimates?",
          options: ["$5.2 trillion", "$10.8 trillion", "$15.7 trillion", "$22.3 trillion"],
          correctAnswer: 2,
          explanation: "PwC estimates AI could contribute up to $15.7 trillion to the global economy by 2030 through productivity gains and consumption effects."
        },
        {
          id: 6,
          question: "What has been the growth in demand for AI ethics professionals over the past three years?",
          options: ["Over 100%", "Over 150%", "Over 200%", "Over 250%"],
          correctAnswer: 2,
          explanation: "The demand for AI ethics professionals has grown by over 200% in the past three years as companies recognize the need for specialized expertise."
        },
        {
          id: 7,
          question: "Which regulation includes provisions for automated decision-making and requires explanations?",
          options: ["GDPR", "Algorithmic Accountability Act", "EU AI Act", "OECD Principles"],
          correctAnswer: 0,
          explanation: "GDPR (General Data Protection Regulation) includes provisions for automated decision-making and requires explanations for algorithmic decisions affecting individuals."
        },
        {
          id: 8,
          question: "What type of bias occurs when training data doesn't adequately represent the target population?",
          options: ["Algorithmic Bias", "Dataset Bias", "Measurement Bias", "Deployment Bias"],
          correctAnswer: 1,
          explanation: "Dataset bias occurs when training data doesn't adequately represent the target population or real-world scenarios the system will encounter."
        },
        {
          id: 9,
          question: "What future AI trend involves systems processing multiple data types simultaneously?",
          options: ["Explainable AI", "AI Governance", "Multimodal AI", "Neuromorphic Computing"],
          correctAnswer: 2,
          explanation: "Multimodal AI involves systems that can process and understand multiple types of data simultaneously (text, images, audio, video)."
        },
        {
          id: 10,
          question: "Which ethical principle involves establishing clear responsibility for AI decisions?",
          options: ["Fairness", "Transparency", "Accountability", "Safety"],
          correctAnswer: 2,
          explanation: "Accountability involves establishing clear responsibility when AI systems cause harm or make erroneous decisions that affect people."
        },
        {
          id: 11,
          question: "What does XAI stand for in AI ethics?",
          options: ["Extended Artificial Intelligence", "Explainable Artificial Intelligence", "Expert Artificial Intelligence", "Ethical Artificial Intelligence"],
          correctAnswer: 1,
          explanation: "XAI stands for Explainable Artificial Intelligence, focusing on making AI decision-making processes understandable and transparent."
        },
        {
          id: 12,
          question: "Which future trend combines quantum computing with machine learning?",
          options: ["Explainable AI", "Quantum Machine Learning", "Neuromorphic Computing", "Multimodal AI"],
          correctAnswer: 1,
          explanation: "Quantum Machine Learning combines quantum computing with machine learning to solve problems currently intractable with classical computers."
        },
        {
          id: 13,
          question: "What is the EU's risk-based regulatory framework for AI called?",
          options: ["GDPR", "Algorithmic Accountability Act", "EU AI Act", "OECD AI Principles"],
          correctAnswer: 2,
          explanation: "The EU AI Act is a risk-based regulatory framework categorizing AI systems by risk level with corresponding requirements."
        },
        {
          id: 14,
          question: "What type of bias occurs from how outcomes are measured or labeled?",
          options: ["Dataset Bias", "Algorithmic Bias", "Measurement Bias", "Deployment Bias"],
          correctAnswer: 2,
          explanation: "Measurement bias occurs when the way outcomes are measured, labeled, or defined introduces systematic errors or unfairness."
        },
        {
          id: 15,
          question: "Which organization provides technical standards for ethically aligned AI design?",
          options: ["OECD", "IEEE", "EU", "UN"],
          correctAnswer: 1,
          explanation: "IEEE (Institute of Electrical and Electronics Engineers) provides technical standards for ethically aligned design of autonomous systems."
        },
        {
          id: 16,
          question: "What future AI hardware mimics the brain's neural structure?",
          options: ["Quantum Computers", "Neuromorphic Computing", "GPU Clusters", "TPU Arrays"],
          correctAnswer: 1,
          explanation: "Neuromorphic computing involves hardware designed to mimic the brain's neural structure for more efficient AI processing."
        },
        {
          id: 17,
          question: "Which ethical principle focuses on preventing discrimination in AI systems?",
          options: ["Fairness", "Transparency", "Privacy", "Accountability"],
          correctAnswer: 0,
          explanation: "Fairness focuses on ensuring AI systems don't discriminate against individuals or groups based on protected characteristics."
        },
        {
          id: 18,
          question: "What is applying AI to address global challenges like climate change called?",
          options: ["AI Governance", "AI for Social Good", "Multimodal AI", "Explainable AI"],
          correctAnswer: 1,
          explanation: "AI for Social Good refers to applying artificial intelligence to address global challenges like climate change, healthcare, and poverty."
        },
        {
          id: 19,
          question: "Which ethical principle involves maintaining meaningful human control over AI?",
          options: ["Transparency", "Accountability", "Human Oversight", "Safety"],
          correctAnswer: 2,
          explanation: "Human Oversight involves maintaining meaningful human control over AI systems, especially in critical applications affecting people's lives."
        },
        {
          id: 20,
          question: "What future trend focuses on structures for responsible AI development across organizations?",
          options: ["Explainable AI", "AI Governance", "Multimodal AI", "Neuromorphic Computing"],
          correctAnswer: 1,
          explanation: "AI Governance involves implementing structures and processes to ensure responsible AI development and deployment across organizations."
        }
      ]
    }
  ],

  // FINAL EXAM - 40 COMPREHENSIVE QUESTIONS
  finalExam: [
    // Questions from Module 1
    {
      id: 1,
      moduleId: 1,
      question: "In which year was the term 'artificial intelligence' officially coined at the Dartmouth Conference?",
      options: ["1945", "1956", "1968", "1972"],
      correctAnswer: 1,
      explanation: "The term 'artificial intelligence' was officially coined in 1956 at the Dartmouth Conference, marking the formal beginning of AI as a field."
    },
    {
      id: 2,
      moduleId: 1,
      question: "What percentage of digitally mature organizations have a defined AI strategy?",
      options: ["23%", "35%", "47%", "62%"],
      correctAnswer: 2,
      explanation: "47% of digitally mature organizations have a defined AI strategy according to recent industry surveys."
    },
    {
      id: 3,
      moduleId: 1,
      question: "What is often described as 'the fuel for AI' systems?",
      options: ["Processing Power", "Algorithms", "Data", "Programming Languages"],
      correctAnswer: 2,
      explanation: "Data is described as 'the fuel for AI' because AI systems learn patterns from data to make decisions."
    },
    {
      id: 4,
      moduleId: 1,
      question: "What type of AI is designed for specific tasks like facial recognition?",
      options: ["General AI", "Broad AI", "Narrow AI", "Strong AI"],
      correctAnswer: 2,
      explanation: "Narrow AI (Weak AI) is designed for specific, limited tasks and represents all current practical AI applications."
    },

    // Questions from Module 2
    {
      id: 5,
      moduleId: 2,
      question: "What percentage of available data is typically used for training machine learning models?",
      options: ["50-60%", "70-80%", "85-90%", "95-100%"],
      correctAnswer: 1,
      explanation: "Typically, 70-80% of available data is used for training machine learning models."
    },
    {
      id: 6,
      moduleId: 2,
      question: "According to industry analysis, what percentage of business ML applications use supervised learning?",
      options: ["45%", "55%", "70%", "85%"],
      correctAnswer: 2,
      explanation: "Supervised learning accounts for approximately 70% of all machine learning applications in business settings."
    },
    {
      id: 7,
      moduleId: 2,
      question: "What are individual measurable properties of data called in machine learning?",
      options: ["Labels", "Features", "Attributes", "Variables"],
      correctAnswer: 1,
      explanation: "Features are individual measurable properties or characteristics of the data being observed."
    },
    {
      id: 8,
      moduleId: 2,
      question: "Which algorithm predicts continuous values by finding the best-fitting straight line?",
      options: ["Decision Tree", "Linear Regression", "K-Nearest Neighbors", "Neural Network"],
      correctAnswer: 1,
      explanation: "Linear regression predicts continuous values by finding the best-fitting straight line through data points."
    },

    // Questions from Module 3
    {
      id: 9,
      moduleId: 3,
      question: "How many hidden layers are typically required for a network to be considered 'deep learning'?",
      options: ["One or more", "Two or more", "Three or more", "Five or more"],
      correctAnswer: 2,
      explanation: "Deep learning typically refers to neural networks with three or more hidden layers."
    },
    {
      id: 10,
      moduleId: 3,
      question: "What percentage of major tech companies use deep learning for computer vision applications?",
      options: ["74%", "84%", "94%", "98%"],
      correctAnswer: 2,
      explanation: "94% of major tech companies use deep learning for computer vision applications."
    },
    {
      id: 11,
      moduleId: 3,
      question: "What has deep learning error rates in image recognition dropped to over the past decade?",
      options: ["From 50% to 10%", "From 40% to 15%", "From 26% to less than 3%", "From 15% to 2%"],
      correctAnswer: 2,
      explanation: "Deep learning error rates in image recognition have dropped from 26% to less than 3% over the past decade."
    },
    {
      id: 12,
      moduleId: 3,
      question: "Which activation function is most popular in hidden layers due to computational efficiency?",
      options: ["Sigmoid", "Tanh", "ReLU", "Softmax"],
      correctAnswer: 2,
      explanation: "ReLU is most popular in hidden layers due to computational efficiency and mitigating vanishing gradient problems."
    },

    // Questions from Module 4
    {
      id: 13,
      moduleId: 4,
      question: "What percentage of customer service operations use chatbots or virtual assistants?",
      options: ["65%", "75%", "85%", "95%"],
      correctAnswer: 2,
      explanation: "85% of customer service operations use chatbots or virtual assistants powered by NLP."
    },
    {
      id: 14,
      moduleId: 4,
      question: "What is the projected growth of the global NLP market from 2022 to 2030?",
      options: ["From $10B to $80B", "From $20B to $160B", "From $30B to $200B", "From $40B to $250B"],
      correctAnswer: 1,
      explanation: "The global NLP market is projected to grow from $20B in 2022 to over $160B by 2030."
    },
    {
      id: 15,
      moduleId: 4,
      question: "What has sentiment analysis accuracy improved to with modern deep learning approaches?",
      options: ["From 60% to 80%", "From 70% to over 90%", "From 80% to 95%", "From 85% to 98%"],
      correctAnswer: 1,
      explanation: "Sentiment analysis accuracy improved from 70% to over 90% with modern deep learning approaches."
    },
    {
      id: 16,
      moduleId: 4,
      question: "What does BERT stand for in NLP?",
      options: ["Bidirectional Encoder Representations from Transformers", "Basic Embedded Representation Techniques", "Binary Encoding for Relational Text", "Biometric Entity Recognition Technology"],
      correctAnswer: 0,
      explanation: "BERT stands for Bidirectional Encoder Representations from Transformers."
    },

    // Questions from Module 5
    {
      id: 17,
      moduleId: 5,
      question: "What accuracy has image classification reached on benchmark datasets like ImageNet?",
      options: ["Over 90%", "Over 95%", "Over 98%", "Over 99%"],
      correctAnswer: 2,
      explanation: "Image classification accuracy has reached over 98% on benchmark datasets like ImageNet."
    },
    {
      id: 18,
      moduleId: 5,
      question: "How many smartphones worldwide use facial recognition technology?",
      options: ["500 million", "750 million", "1 billion", "1.5 billion"],
      correctAnswer: 2,
      explanation: "Over 1 billion smartphones worldwide use facial recognition technology."
    },
    {
      id: 19,
      moduleId: 5,
      question: "What is the expected growth of the computer vision market from 2020 to 2025?",
      options: ["From $5B to $10B", "From $8B to $15B", "From $11B to $20B", "From $15B to $25B"],
      correctAnswer: 2,
      explanation: "The computer vision market is expected to grow from $11B in 2020 to $20B by 2025."
    },
    {
      id: 20,
      moduleId: 5,
      question: "What accuracy do modern facial recognition systems achieve under controlled conditions?",
      options: ["97.5%", "98.8%", "99.3%", "99.97%"],
      correctAnswer: 3,
      explanation: "Modern facial recognition systems achieve 99.97% accuracy under controlled conditions."
    },

    // Questions from Module 6
    {
      id: 21,
      moduleId: 6,
      question: "What percentage of AI projects risk bias if not properly addressed?",
      options: ["Up to 65%", "Up to 75%", "Up to 85%", "Up to 95%"],
      correctAnswer: 2,
      explanation: "Up to 85% of AI projects risk bias if not properly addressed."
    },
    {
      id: 22,
      moduleId: 6,
      question: "What is the projected market size for Explainable AI (XAI) by 2030?",
      options: ["$8 billion", "$14 billion", "$21 billion", "$30 billion"],
      correctAnswer: 2,
      explanation: "The XAI market is projected to reach $21 billion by 2030."
    },
    {
      id: 23,
      moduleId: 6,
      question: "How much could AI contribute to the global economy by 2030 according to PwC?",
      options: ["$5.2 trillion", "$10.8 trillion", "$15.7 trillion", "$22.3 trillion"],
      correctAnswer: 2,
      explanation: "AI could contribute up to $15.7 trillion to the global economy by 2030."
    },
    {
      id: 24,
      moduleId: 6,
      question: "What has been the growth in demand for AI ethics professionals over three years?",
      options: ["Over 100%", "Over 150%", "Over 200%", "Over 250%"],
      correctAnswer: 2,
      explanation: "Demand for AI ethics professionals grew over 200% in three years."
    },

    // Additional Comprehensive Questions
    {
      id: 25,
      moduleId: 2,
      question: "What is the harmonic mean of precision and recall called?",
      options: ["Accuracy Score", "F1 Score", "R2 Score", "Mean Squared Error"],
      correctAnswer: 1,
      explanation: "The F1 score is the harmonic mean of precision and recall."
    },
    {
      id: 26,
      moduleId: 3,
      question: "What type of neural network is specialized for processing grid-like data such as images?",
      options: ["Feedforward NN", "Convolutional NN", "Recurrent NN", "Transformer"],
      correctAnswer: 1,
      explanation: "Convolutional Neural Networks are specialized for grid-like data like images."
    },
    {
      id: 27,
      moduleId: 4,
      question: "What is the first step in most NLP pipelines?",
      options: ["Stemming", "Tokenization", "Stop word removal", "Part-of-speech tagging"],
      correctAnswer: 1,
      explanation: "Tokenization is typically the first step in NLP pipelines."
    },
    {
      id: 28,
      moduleId: 5,
      question: "Which CNN architecture revolutionized computer vision in 2012?",
      options: ["LeNet-5", "AlexNet", "VGGNet", "ResNet"],
      correctAnswer: 1,
      explanation: "AlexNet revolutionized computer vision by winning the 2012 ImageNet competition."
    },
    {
      id: 29,
      moduleId: 6,
      question: "Which regulation includes provisions for automated decision-making explanations?",
      options: ["GDPR", "Algorithmic Accountability Act", "EU AI Act", "OECD Principles"],
      correctAnswer: 0,
      explanation: "GDPR includes provisions for explanations of automated decisions."
    },
    {
      id: 30,
      moduleId: 1,
      question: "What decade is known as the 'AI Winter'?",
      options: ["1950s", "1960s", "1970s", "1980s"],
      correctAnswer: 2,
      explanation: "The 1970s are known as the 'AI Winter' due to reduced funding."
    },
    {
      id: 31,
      moduleId: 2,
      question: "What type of machine learning learns through trial and error with rewards?",
      options: ["Supervised Learning", "Unsupervised Learning", "Reinforcement Learning", "Semi-supervised Learning"],
      correctAnswer: 2,
      explanation: "Reinforcement learning involves trial and error with rewards/penalties."
    },
    {
      id: 32,
      moduleId: 3,
      question: "What does ReLU return for negative input values?",
      options: ["The negative value", "Zero", "Absolute value", "Sigmoid of value"],
      correctAnswer: 1,
      explanation: "ReLU returns 0 for negative input values."
    },
    {
      id: 33,
      moduleId: 4,
      question: "Which NLP task involves converting spoken language into text?",
      options: ["Text Generation", "Speech Recognition", "Machine Translation", "Question Answering"],
      correctAnswer: 1,
      explanation: "Speech recognition converts spoken language into text."
    },
    {
      id: 34,
      moduleId: 5,
      question: "What does OCR stand for in computer vision?",
      options: ["Optical Character Recognition", "Object Classification and Recognition", "Online Character Reading", "Optical Color Recognition"],
      correctAnswer: 0,
      explanation: "OCR stands for Optical Character Recognition."
    },
    {
      id: 35,
      moduleId: 6,
      question: "What type of bias occurs from unrepresentative training data?",
      options: ["Algorithmic Bias", "Dataset Bias", "Measurement Bias", "Deployment Bias"],
      correctAnswer: 1,
      explanation: "Dataset bias occurs from unrepresentative training data."
    },
    {
      id: 36,
      moduleId: 1,
      question: "What are AI systems that perceive environments and take actions called?",
      options: ["Bots", "Intelligent Agents", "Smart Systems", "Cognitive Computers"],
      correctAnswer: 1,
      explanation: "Intelligent agents perceive environments and take actions."
    },
    {
      id: 37,
      moduleId: 2,
      question: "What evaluation metric can be misleading with imbalanced datasets?",
      options: ["Precision", "Recall", "Accuracy", "F1 Score"],
      correctAnswer: 2,
      explanation: "Accuracy can be misleading with imbalanced datasets."
    },
    {
      id: 38,
      moduleId: 3,
      question: "Which neural network type is designed for sequential data?",
      options: ["Feedforward NN", "Convolutional NN", "Recurrent NN", "Perceptron"],
      correctAnswer: 2,
      explanation: "Recurrent Neural Networks are designed for sequential data."
    },
    {
      id: 39,
      moduleId: 4,
      question: "Which word embedding method uses character n-grams?",
      options: ["Word2Vec", "GloVe", "FastText", "BERT"],
      correctAnswer: 2,
      explanation: "FastText uses character n-grams for word embeddings."
    },
    {
      id: 40,
      moduleId: 5,
      question: "Which real-time object detection system processes images in a single pass?",
      options: ["Faster R-CNN", "Mask R-CNN", "YOLO", "SSD"],
      correctAnswer: 2,
      explanation: "YOLO processes images in a single pass for real-time detection."
    }
  ]
};

export type CourseType = typeof AICertificateCourse;
