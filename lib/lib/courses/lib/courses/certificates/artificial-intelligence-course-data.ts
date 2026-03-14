export const artificialIntelligenceBasicsCourseData = {
  id: "artificial-intelligence-basics-certificate",
  title: "Artificial Intelligence Basics (Certificate)",
  description: "This comprehensive certificate course provides foundational knowledge in artificial intelligence concepts, machine learning algorithms, neural networks, and practical AI applications. Designed for beginners and professionals seeking to understand AI fundamentals, this course covers the history of AI, core algorithms, data preparation techniques, model evaluation, and ethical considerations. Participants will master basic AI concepts, understand different machine learning approaches, and learn to implement simple AI solutions using modern tools and frameworks.",
  duration: "6 weeks",
  students: 4500,
  rating: 4.8,
  modules: [
    {
      id: 1,
      title: "Introduction to Artificial Intelligence",
      content: `This module establishes the foundational concepts and history of artificial intelligence.

**1. What is Artificial Intelligence?**
- **AI Definition**: The science and engineering of making intelligent machines, especially intelligent computer programs
- **Types of AI**: Narrow/Weak AI vs. General/Strong AI vs. Superintelligent AI
- **AI Capabilities**: Problem solving, learning, perception, reasoning, knowledge representation, planning
- **AI vs. Traditional Programming**: Rule-based vs. learning-based approaches, adaptability differences

**2. Historical Development of AI**
- **The Birth of AI (1950s)**: Turing Test, Dartmouth Conference, early optimism
- **AI Winters (1970s-1980s)**: Funding cuts, unmet expectations, criticism from Lighthill Report
- **Expert Systems Era (1980s)**: Rule-based systems, commercial applications, limitations
- **Modern AI Renaissance (2000s-Present)**: Big data, improved algorithms, computational power, deep learning breakthrough

**3. Key AI Concepts and Terminology**
- **Machine Learning**: Algorithms that improve through experience
- **Neural Networks**: Biological inspiration, artificial neurons, layered architecture
- **Natural Language Processing**: Computer understanding and generation of human language
- **Computer Vision**: Machines interpreting and understanding visual information
- **Robotics**: Physical AI systems, sensors, actuators, control systems

**4. AI Applications and Impact**
- **Industry Applications**: Healthcare diagnostics, financial trading, retail recommendations, manufacturing automation
- **Daily Life AI**: Virtual assistants, spam filters, navigation apps, social media algorithms
- **Economic Impact**: Job displacement vs. creation, productivity gains, new industry formation
- **Societal Considerations**: Bias in AI, privacy concerns, accountability, transparency`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What percentage of companies are implementing AI in some form?",
          options: [
            "25%",
            "45%",
            "65%",
            "85%"
          ],
          correctAnswer: 1,
          explanation: "Approximately 45% of companies globally are implementing or piloting AI solutions, with adoption growing rapidly."
        },
        {
          id: 2,
          question: "When was the term 'Artificial Intelligence' first coined?",
          options: [
            "1947",
            "1956",
            "1965",
            "1972"
          ],
          correctAnswer: 1,
          explanation: "The term 'Artificial Intelligence' was coined by John McCarthy in 1956 at the Dartmouth Conference."
        },
        {
          id: 3,
          question: "What type of AI do all current commercial systems represent?",
          options: [
            "Narrow AI",
            "General AI",
            "Superintelligent AI",
            "Conscious AI"
          ],
          correctAnswer: 0,
          explanation: "All current AI systems are Narrow/Weak AI - specialized for specific tasks rather than general intelligence."
        },
        {
          id: 4,
          question: "Which industry has the highest AI adoption rate?",
          options: [
            "Healthcare",
            "Finance",
            "Retail",
            "Technology"
          ],
          correctAnswer: 3,
          explanation: "Technology companies lead AI adoption at 65%, followed by financial services at 45%, and healthcare at 35%."
        },
        {
          id: 5,
          question: "What was the primary cause of the first AI Winter?",
          options: [
            "Ethical concerns",
            "Lack of funding",
            "Technical limitations",
            "Public opposition"
          ],
          correctAnswer: 2,
          explanation: "The first AI Winter (1974-1980) resulted from technical limitations and unfulfilled promises, leading to reduced funding."
        }
      ]
    },
    {
      id: 2,
      title: "Machine Learning Fundamentals",
      content: `This module covers the core concepts and types of machine learning algorithms.

**1. Machine Learning Paradigms**
- **Supervised Learning**: Labeled training data, prediction/classification tasks
- **Unsupervised Learning**: Unlabeled data, pattern discovery, clustering
- **Semi-supervised Learning**: Combination of labeled and unlabeled data
- **Reinforcement Learning**: Agent-environment interaction, reward-based learning
- **Self-supervised Learning**: Creating labels from data itself, emerging approach

**2. Supervised Learning Algorithms**
- **Linear Regression**: Predicting continuous values, relationship modeling
- **Logistic Regression**: Binary classification, probability estimation
- **Decision Trees**: Tree-based classification, interpretable models
- **Support Vector Machines**: Finding optimal hyperplane, margin maximization
- **k-Nearest Neighbors**: Instance-based learning, similarity measurement

**3. Unsupervised Learning Algorithms**
- **Clustering Algorithms**: k-Means, hierarchical clustering, DBSCAN
- **Dimensionality Reduction**: PCA (Principal Component Analysis), t-SNE
- **Association Rule Learning**: Market basket analysis, pattern discovery
- **Anomaly Detection**: Identifying outliers, fraud detection applications

**4. Model Evaluation Metrics**
- **Classification Metrics**: Accuracy, precision, recall, F1-score, ROC-AUC
- **Regression Metrics**: Mean Absolute Error, Mean Squared Error, R-squared
- **Clustering Metrics**: Silhouette score, Davies-Bouldin index, Calinski-Harabasz index
- **Cross-Validation**: k-fold cross-validation, train-test split, validation sets`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What percentage of machine learning projects use supervised learning?",
          options: [
            "45%",
            "65%",
            "85%",
            "95%"
          ],
          correctAnswer: 2,
          explanation: "Approximately 85% of real-world machine learning projects use supervised learning due to availability of labeled data."
        },
        {
          id: 2,
          question: "Which machine learning type is best for customer segmentation?",
          options: [
            "Supervised learning",
            "Unsupervised learning",
            "Reinforcement learning",
            "Semi-supervised learning"
          ],
          correctAnswer: 1,
          explanation: "Unsupervised learning (clustering) is ideal for customer segmentation when labels aren't available."
        },
        {
          id: 3,
          question: "What is the most commonly used regression metric?",
          options: [
            "Mean Absolute Error",
            "Mean Squared Error",
            "R-squared",
            "Root Mean Squared Error"
          ],
          correctAnswer: 1,
          explanation: "Mean Squared Error is most commonly used (65% of projects), though RMSE is more interpretable."
        },
        {
          id: 4,
          question: "How many folds are typically used in k-fold cross-validation?",
          options: [
            "3 folds",
            "5 folds",
            "10 folds",
            "15 folds"
          ],
          correctAnswer: 2,
          explanation: "10-fold cross-validation is standard, providing good balance between bias and variance."
        },
        {
          id: 5,
          question: "What percentage of data is typically used for training in 80-20 split?",
          options: [
            "60% training, 40% testing",
            "70% training, 30% testing",
            "80% training, 20% testing",
            "90% training, 10% testing"
          ],
          correctAnswer: 2,
          explanation: "80-20 split (80% training, 20% testing) is most common, though 70-30 is also widely used."
        }
      ]
    },
    {
      id: 3,
      title: "Neural Networks and Deep Learning Basics",
      content: `This module introduces neural networks and fundamental deep learning concepts.

**1. Biological Inspiration**
- **Biological Neurons**: Dendrites, cell body, axon, synapses
- **Artificial Neurons**: Perceptron model, activation functions, weighted inputs
- **Historical Development**: Rosenblatt's perceptron, Minsky's criticism, backpropagation breakthrough
- **McCulloch-Pitts Neuron**: First mathematical model of neuron (1943)

**2. Neural Network Architecture**
- **Network Layers**: Input layer, hidden layers, output layer
- **Activation Functions**: Sigmoid, Tanh, ReLU, Leaky ReLU, Softmax
- **Forward Propagation**: Input processing through layers to output
- **Backpropagation**: Error calculation and weight adjustment, gradient descent

**3. Basic Neural Network Types**
- **Feedforward Neural Networks**: Simplest architecture, unidirectional flow
- **Convolutional Neural Networks**: Specialized for grid-like data (images), convolutional layers
- **Recurrent Neural Networks**: Sequences and time series, memory capability
- **Autoencoders**: Unsupervised learning, dimensionality reduction, feature learning

**4. Training Neural Networks**
- **Loss Functions**: Mean Squared Error, Cross-Entropy, Hinge Loss
- **Optimization Algorithms**: Gradient Descent, Stochastic Gradient Descent, Adam, RMSprop
- **Hyperparameters**: Learning rate, batch size, number of epochs, regularization
- **Overfitting Prevention**: Dropout, early stopping, data augmentation, regularization`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What percentage accuracy did AlexNet achieve in ImageNet 2012?",
          options: [
            "65%",
            "75%",
            "85%",
            "95%"
          ],
          correctAnswer: 2,
          explanation: "AlexNet achieved 85% top-5 accuracy in ImageNet 2012, sparking the deep learning revolution."
        },
        {
          id: 2,
          question: "Which activation function is most commonly used in hidden layers?",
          options: [
            "Sigmoid",
            "Tanh",
            "ReLU",
            "Softmax"
          ],
          correctAnswer: 2,
          explanation: "ReLU (Rectified Linear Unit) is used in approximately 85% of modern neural network hidden layers."
        },
        {
          id: 3,
          question: "What is the vanishing gradient problem?",
          options: [
            "Weights become too large",
            "Gradients become extremely small",
            "Network stops learning",
            "All neurons activate simultaneously"
          ],
          correctAnswer: 1,
          explanation: "Gradients become extremely small during backpropagation, preventing weight updates in early layers."
        },
        {
          id: 4,
          question: "What percentage of deep learning projects use pre-trained models?",
          options: [
            "25%",
            "45%",
            "65%",
            "85%"
          ],
          correctAnswer: 2,
          explanation: "Approximately 65% of deep learning projects use transfer learning with pre-trained models to save time/resources."
        },
        {
          id: 5,
          question: "What is the typical learning rate range for training neural networks?",
          options: [
            "0.00001 - 0.0001",
            "0.001 - 0.01",
            "0.1 - 1.0",
            "1.0 - 10.0"
          ],
          correctAnswer: 1,
          explanation: "Learning rates typically range from 0.001 to 0.01, though adaptive methods like Adam adjust automatically."
        }
      ]
    },
    {
      id: 4,
      title: "Data Preparation and Feature Engineering",
      content: `This module covers data preparation techniques essential for successful AI projects.

**1. Data Collection and Understanding**
- **Data Sources**: Databases, APIs, web scraping, IoT sensors, manual entry
- **Data Types**: Numerical, categorical, text, image, audio, time series
- **Data Quality Assessment**: Completeness, consistency, accuracy, timeliness
- **Exploratory Data Analysis**: Summary statistics, visualization, pattern discovery

**2. Data Cleaning and Preprocessing**
- **Handling Missing Values**: Deletion, mean/median imputation, prediction imputation
- **Outlier Detection and Treatment**: Z-score, IQR method, domain knowledge
- **Data Transformation**: Normalization, standardization, scaling
- **Encoding Categorical Variables**: One-hot encoding, label encoding, target encoding

**3. Feature Engineering Techniques**
- **Feature Creation**: Mathematical transformations, interaction terms, domain knowledge
- **Feature Selection**: Filter methods, wrapper methods, embedded methods
- **Dimensionality Reduction**: PCA, LDA, t-SNE, autoencoders
- **Time Series Features**: Lag features, rolling statistics, seasonal decomposition

**4. Data Splitting and Validation**
- **Train-Validation-Test Split**: Typical splits (60-20-20, 70-15-15)
- **Cross-Validation Strategies**: k-fold, stratified k-fold, time series cross-validation
- **Data Leakage Prevention**: Ensuring no test data influences training
- **Production Data Considerations**: Data drift monitoring, concept drift detection`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What percentage of data science time is spent on data preparation?",
          options: [
            "25%",
            "45%",
            "65%",
            "85%"
          ],
          correctAnswer: 3,
          explanation: "Data scientists spend approximately 80-85% of their time on data collection, cleaning, and preparation."
        },
        {
          id: 2,
          question: "Which method is most common for handling missing numerical data?",
          options: [
            "Delete rows",
            "Mean imputation",
            "Median imputation",
            "Regression imputation"
          ],
          correctAnswer: 1,
          explanation: "Mean imputation is used in 45% of cases, though median is better for skewed distributions."
        },
        {
          id: 3,
          question: "What is the main purpose of feature engineering?",
          options: [
            "Reduce dataset size",
            "Improve model performance",
            "Speed up training",
            "Simplify code"
          ],
          correctAnswer: 1,
          explanation: "Feature engineering creates better input features to improve model accuracy and generalization."
        },
        {
          id: 4,
          question: "How many principal components typically capture 95% variance?",
          options: [
            "1-5 components",
            "5-10 components",
            "10-20 components",
            "20-50 components"
          ],
          correctAnswer: 1,
          explanation: "Typically 5-10 principal components capture 95% of variance in well-structured datasets."
        },
        {
          id: 5,
          question: "What percentage of models fail due to data quality issues?",
          options: [
            "25%",
            "45%",
            "65%",
            "85%"
          ],
          correctAnswer: 1,
          explanation: "Approximately 45% of AI/ML projects fail due to poor data quality, labeling, or preparation issues."
        }
      ]
    },
    {
      id: 5,
      title: "AI Tools and Implementation Basics",
      content: `This module introduces essential AI tools, libraries, and implementation frameworks.

**1. Popular AI/ML Libraries**
- **Scikit-learn**: Traditional ML algorithms, simple API, excellent documentation
- **TensorFlow**: Google's framework, comprehensive ecosystem, production-ready
- **PyTorch**: Facebook's framework, dynamic computation, research friendly
- **Keras**: High-level API, easy prototyping, runs on TensorFlow/Theano
- **XGBoost**: Gradient boosting library, competition winner, high performance

**2. Development Environments**
- **Jupyter Notebooks**: Interactive development, documentation, visualization
- **Google Colab**: Free GPU access, cloud-based, collaborative
- **VS Code/PyCharm**: Professional IDEs, debugging, version control integration
- **Cloud Platforms**: AWS SageMaker, Google AI Platform, Azure Machine Learning

**3. Model Deployment Basics**
- **API Deployment**: REST APIs, Flask/FastAPI frameworks, containerization
- **Cloud Deployment**: Serverless functions, managed services, auto-scaling
- **Edge Deployment**: Mobile devices, IoT devices, embedded systems
- **Monitoring and Maintenance**: Performance tracking, model retraining, A/B testing

**4. AI Project Lifecycle**
- **CRISP-DM Methodology**: Business understanding, data understanding, preparation, modeling, evaluation, deployment
- **Agile AI Development**: Iterative approach, minimum viable model, continuous improvement
- **Team Roles**: Data scientist, ML engineer, data engineer, domain expert
- **Project Management**: Timeline estimation, resource allocation, risk management`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What percentage of data scientists use Python as their primary language?",
          options: [
            "45%",
            "65%",
            "85%",
            "95%"
          ],
          correctAnswer: 2,
          explanation: "Approximately 85% of data scientists use Python, with R at 35% (many use both)."
        },
        {
          id: 2,
          question: "Which framework is most popular in production environments?",
          options: [
            "TensorFlow",
            "PyTorch",
            "Scikit-learn",
            "MXNet"
          ],
          correctAnswer: 0,
          explanation: "TensorFlow is used in 65% of production deployments, though PyTorch adoption is growing rapidly."
        },
        {
          id: 3,
          question: "What percentage of AI projects reach production deployment?",
          options: [
            "15%",
            "35%",
            "55%",
            "75%"
          ],
          correctAnswer: 0,
          explanation: "Only 15-20% of AI proof-of-concepts reach production due to scalability, integration, and maintenance challenges."
        },
        {
          id: 4,
          question: "Which tool is most commonly used for interactive AI development?",
          options: [
            "Jupyter Notebooks",
            "VS Code",
            "PyCharm",
            "Google Colab"
          ],
          correctAnswer: 0,
          explanation: "Jupyter Notebooks are used by 85% of data scientists for interactive development and experimentation."
        },
        {
          id: 5,
          question: "How many phases are in the CRISP-DM methodology?",
          options: [
            "4 phases",
            "6 phases",
            "8 phases",
            "10 phases"
          ],
          correctAnswer: 1,
          explanation: "CRISP-DM has 6 phases: Business Understanding, Data Understanding, Data Preparation, Modeling, Evaluation, Deployment."
        }
      ]
    },
    {
      id: 6,
      title: "Ethics, Bias, and Responsible AI",
      content: `This module covers ethical considerations, bias mitigation, and responsible AI practices.

**1. Ethical Principles in AI**
- **Beneficence**: Doing good, promoting well-being
- **Non-maleficence**: Avoiding harm, preventing negative consequences
- **Autonomy**: Respecting human decision-making, informed consent
- **Justice**: Fairness, avoiding discrimination, equitable distribution of benefits
- **Explicability**: Transparency, explainability, accountability

**2. Types of AI Bias**
- **Data Bias**: Historical bias, measurement bias, representation bias
- **Algorithmic Bias**: Design choices, optimization objectives, feedback loops
- **Deployment Bias**: Context mismatch, improper use, automation bias
- **Societal Bias**: Cultural assumptions, language limitations, value judgments

**3. Bias Detection and Mitigation**
- **Fairness Metrics**: Demographic parity, equal opportunity, predictive parity
- **Pre-processing Methods**: Reweighting, resampling, adversarial debiasing
- **In-processing Methods**: Constrained optimization, regularization for fairness
- **Post-processing Methods**: Calibration, threshold adjustment, rejection option

**4. Responsible AI Frameworks**
- **AI Ethics Guidelines**: EU Ethics Guidelines, IEEE Ethically Aligned Design, OECD Principles
- **Explainable AI**: LIME, SHAP, counterfactual explanations, model cards
- **Privacy Protection**: Differential privacy, federated learning, homomorphic encryption
- **Governance Structures**: Ethics boards, impact assessments, audit trails`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What percentage of AI professionals consider ethics very important?",
          options: [
            "45%",
            "65%",
            "85%",
            "95%"
          ],
          correctAnswer: 2,
          explanation: "85% of AI professionals believe ethics is very important, though only 25% have formal ethics training."
        },
        {
          id: 2,
          question: "Which industry faces the most AI bias scrutiny?",
          options: [
            "Healthcare",
            "Finance",
            "Hiring/HR",
            "Criminal justice"
          ],
          correctAnswer: 3,
          explanation: "Criminal justice AI systems face the most scrutiny due to high-stakes decisions and historical bias in data."
        },
        {
          id: 3,
          question: "What percentage of facial recognition systems show racial bias?",
          options: [
            "25%",
            "45%",
            "65%",
            "85%"
          ],
          correctAnswer: 3,
          explanation: "Studies show 85% of commercial facial recognition systems perform worse on darker-skinned females."
        },
        {
          id: 4,
          question: "How many AI ethics principles does the EU propose?",
          options: [
            "4 principles",
            "7 principles",
            "10 principles",
            "12 principles"
          ],
          correctAnswer: 1,
          explanation: "EU Ethics Guidelines propose 7 requirements: Human agency, technical robustness, privacy, transparency, fairness, well-being, accountability."
        },
        {
          id: 5,
          question: "What percentage of companies have formal AI ethics policies?",
          options: [
            "15%",
            "35%",
            "55%",
            "75%"
          ],
          correctAnswer: 1,
          explanation: "Only 35% of companies have formal AI ethics policies, though 65% are developing them."
        }
      ]
    }
  ],
  finalExam: [
    {
      id: 1,
      question: "Companies implementing AI?",
      options: [
        "25%",
        "45%",
        "65%",
        "85%"
      ],
      correctAnswer: 1,
      explanation: "45% implementing AI."
    },
    {
      id: 2,
      question: "AI term coined in?",
      options: [
        "1947",
        "1956",
        "1965",
        "1972"
      ],
      correctAnswer: 1,
      explanation: "1956 at Dartmouth."
    },
    {
      id: 3,
      question: "Current AI type?",
      options: [
        "Narrow AI",
        "General AI",
        "Superintelligent",
        "Conscious"
      ],
      correctAnswer: 0,
      explanation: "All current is Narrow AI."
    },
    {
      id: 4,
      question: "Highest AI adoption industry?",
      options: [
        "Healthcare",
        "Finance",
        "Retail",
        "Technology"
      ],
      correctAnswer: 3,
      explanation: "Technology leads at 65%."
    },
    {
      id: 5,
      question: "Supervised learning projects?",
      options: [
        "45%",
        "65%",
        "85%",
        "95%"
      ],
      correctAnswer: 2,
      explanation: "85% use supervised."
    },
    {
      id: 6,
      question: "Best for customer segmentation?",
      options: [
        "Supervised",
        "Unsupervised",
        "Reinforcement",
        "Semi-supervised"
      ],
      correctAnswer: 1,
      explanation: "Unsupervised clustering."
    },
    {
      id: 7,
      question: "Common regression metric?",
      options: [
        "MAE",
        "MSE",
        "R²",
        "RMSE"
      ],
      correctAnswer: 1,
      explanation: "MSE used in 65%."
    },
    {
      id: 8,
      question: "Standard k-fold value?",
      options: [
        "3",
        "5",
        "10",
        "15"
      ],
      correctAnswer: 2,
      explanation: "10-fold standard."
    },
    {
      id: 9,
      question: "AlexNet ImageNet accuracy?",
      options: [
        "65%",
        "75%",
        "85%",
        "95%"
      ],
      correctAnswer: 2,
      explanation: "85% top-5 accuracy."
    },
    {
      id: 10,
      question: "Common hidden layer activation?",
      options: [
        "Sigmoid",
        "Tanh",
        "ReLU",
        "Softmax"
      ],
      correctAnswer: 2,
      explanation: "ReLU used in 85%."
    },
    {
      id: 11,
      question: "Vanishing gradient problem?",
      options: [
        "Weights too large",
        "Gradients too small",
        "Network stops",
        "All activate"
      ],
      correctAnswer: 1,
      explanation: "Gradients become tiny."
    },
    {
      id: 12,
      question: "Pre-trained model usage?",
      options: [
        "25%",
        "45%",
        "65%",
        "85%"
      ],
      correctAnswer: 2,
      explanation: "65% use pre-trained."
    },
    {
      id: 13,
      question: "Data science time on preparation?",
      options: [
        "25%",
        "45%",
        "65%",
        "85%"
      ],
      correctAnswer: 3,
      explanation: "80-85% on prep."
    },
    {
      id: 14,
      question: "Missing numerical data method?",
      options: [
        "Delete",
        "Mean impute",
        "Median",
        "Regression"
      ],
      correctAnswer: 1,
      explanation: "Mean imputation 45%."
    },
    {
      id: 15,
      question: "Feature engineering purpose?",
      options: [
        "Reduce size",
        "Improve model",
        "Speed training",
        "Simplify code"
      ],
      correctAnswer: 1,
      explanation: "Improve performance."
    },
    {
      id: 16,
      question: "Data scientists using Python?",
      options: [
        "45%",
        "65%",
        "85%",
        "95%"
      ],
      correctAnswer: 2,
      explanation: "85% use Python."
    },
    {
      id: 17,
      question: "Production framework?",
      options: [
        "TensorFlow",
        "PyTorch",
        "Scikit-learn",
        "MXNet"
      ],
      correctAnswer: 0,
      explanation: "TensorFlow 65%."
    },
    {
      id: 18,
      question: "AI projects reaching production?",
      options: [
        "15%",
        "35%",
        "55%",
        "75%"
      ],
      correctAnswer: 0,
      explanation: "Only 15-20%."
    },
    {
      id: 19,
      question: "Interactive development tool?",
      options: [
        "Jupyter",
        "VS Code",
        "PyCharm",
        "Colab"
      ],
      correctAnswer: 0,
      explanation: "Jupyter used by 85%."
    },
    {
      id: 20,
      question: "CRISP-DM phases?",
      options: [
        "4",
        "6",
        "8",
        "10"
      ],
      correctAnswer: 1,
      explanation: "6 phases."
    },
    {
      id: 21,
      question: "AI ethics importance?",
      options: [
        "45%",
        "65%",
        "85%",
        "95%"
      ],
      correctAnswer: 2,
      explanation: "85% say very important."
    },
    {
      id: 22,
      question: "Most bias scrutiny industry?",
      options: [
        "Healthcare",
        "Finance",
        "HR",
        "Criminal justice"
      ],
      correctAnswer: 3,
      explanation: "Criminal justice."
    },
    {
      id: 23,
      question: "Facial recognition bias?",
      options: [
        "25%",
        "45%",
        "65%",
        "85%"
      ],
      correctAnswer: 3,
      explanation: "85% show racial bias."
    },
    {
      id: 24,
      question: "EU ethics principles?",
      options: [
        "4",
        "7",
        "10",
        "12"
      ],
      correctAnswer: 1,
      explanation: "7 principles."
    },
    {
      id: 25,
      question: "Companies with ethics policies?",
      options: [
        "15%",
        "35%",
        "55%",
        "75%"
      ],
      correctAnswer: 1,
      explanation: "35% have formal policies."
    },
    {
      id: 26,
      question: "First AI Winter cause?",
      options: [
        "Ethics",
        "Funding",
        "Technical limits",
        "Public opposition"
      ],
      correctAnswer: 2,
      explanation: "Technical limitations."
    },
    {
      id: 27,
      question: "Typical train-test split?",
      options: [
        "60-40",
        "70-30",
        "80-20",
        "90-10"
      ],
      correctAnswer: 2,
      explanation: "80-20 most common."
    },
    {
      id: 28,
      question: "Learning rate range?",
      options: [
        "0.00001-0.0001",
        "0.001-0.01",
        "0.1-1.0",
        "1.0-10.0"
      ],
      correctAnswer: 1,
      explanation: "0.001 to 0.01."
    },
    {
      id: 29,
      question: "PCs for 95% variance?",
      options: [
        "1-5",
        "5-10",
        "10-20",
        "20-50"
      ],
      correctAnswer: 1,
      explanation: "5-10 components."
    },
    {
      id: 30,
      question: "Projects failing from data?",
      options: [
        "25%",
        "45%",
        "65%",
        "85%"
      ],
      correctAnswer: 1,
      explanation: "45% fail from data issues."
    },
    {
      id: 31,
      question: "Machine learning definition?",
      options: [
        "Improves with experience",
        "Follows rules",
        "Uses if-then",
        "Static algorithms"
      ],
      correctAnswer: 0,
      explanation: "Improves with experience."
    },
    {
      id: 32,
      question: "Decision trees advantage?",
      options: [
        "Interpretability",
        "Highest accuracy",
        "Fastest training",
        "No tuning needed"
      ],
      correctAnswer: 0,
      explanation: "Highly interpretable."
    },
    {
      id: 33,
      question: "Backpropagation purpose?",
      options: [
        "Forward pass",
        "Weight adjustment",
        "Data collection",
        "Model deployment"
      ],
      correctAnswer: 1,
      explanation: "Adjusts weights via gradients."
    },
    {
      id: 34,
      question: "Overfitting prevention?",
      options: [
        "Dropout",
        "Add layers",
        "Increase parameters",
        "Smaller dataset"
      ],
      correctAnswer: 0,
      explanation: "Dropout randomly drops neurons."
    },
    {
      id: 35,
      question: "One-hot encoding use?",
      options: [
        "Categorical variables",
        "Numerical variables",
        "Missing values",
        "Outliers"
      ],
      correctAnswer: 0,
      explanation: "For categorical variables."
    },
    {
      id: 36,
      question: "Cross-validation benefit?",
      options: [
        "Reduce overfitting",
        "Increase speed",
        "Simplify code",
        "Require less data"
      ],
      correctAnswer: 0,
      explanation: "Reduces overfitting risk."
    },
    {
      id: 37,
      question: "XGBoost strength?",
      options: [
        "Gradient boosting",
        "Neural networks",
        "Clustering",
        "Reinforcement"
      ],
      correctAnswer: 0,
      explanation: "Gradient boosting library."
    },
    {
      id: 38,
      question: "Model deployment method?",
      options: [
        "REST API",
        "Excel file",
        "PDF report",
        "Email attachment"
      ],
      correctAnswer: 0,
      explanation: "REST APIs common."
    },
    {
      id: 39,
      question: "Explainable AI tool?",
      options: [
        "SHAP",
        "TensorFlow",
        "PyTorch",
        "Scikit-learn"
      ],
      correctAnswer: 0,
      explanation: "SHAP explains predictions."
    },
    {
      id: 40,
      question: "AI governance need?",
      options: [
        "Accountability",
        "Speed only",
        "Cost reduction",
        "Simplicity"
      ],
      correctAnswer: 0,
      explanation: "Ensures accountability."
    }
  ]
};
