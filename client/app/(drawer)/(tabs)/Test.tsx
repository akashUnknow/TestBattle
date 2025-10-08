// client/app/(drawer)/(tabs)/Test.tsx
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Alert } from 'react-native';

// ==================== TYPES ====================
type ExamCategory = {
  id: number;
  name: string;
  icon: string;
  testCount: number;
  color: string;
};

type Question = {
  id: number;
  questionText: string;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  correctOption: 1 | 2 | 3 | 4;
};

type Answers = { [key: number]: number };

// ==================== DATA ====================
const EXAM_CATEGORIES: ExamCategory[] = [
  { id: 1, name: 'SSC', icon: '📚', testCount: 45, color: 'bg-blue-600' },
  { id: 2, name: 'RRB', icon: '🚂', testCount: 38, color: 'bg-green-600' },
  { id: 3, name: 'Banking', icon: '🏦', testCount: 52, color: 'bg-purple-600' },
  { id: 4, name: 'UPSC', icon: '🎓', testCount: 30, color: 'bg-orange-600' },
  { id: 5, name: 'State PSC', icon: '🏛️', testCount: 25, color: 'bg-red-600' },
  { id: 6, name: 'Police', icon: '👮', testCount: 20, color: 'bg-indigo-600' },
];

const SAMPLE_QUESTIONS: Question[] = [
  { id: 1, questionText: "What is the capital of India?", option1: "Mumbai", option2: "New Delhi", option3: "Kolkata", option4: "Chennai", correctOption: 2 },
  { id: 2, questionText: "Who is known as the Father of the Nation in India?", option1: "Jawaharlal Nehru", option2: "Sardar Patel", option3: "Mahatma Gandhi", option4: "Subhas Chandra Bose", correctOption: 3 },
  { id: 3, questionText: "What is 15 × 12?", option1: "150", option2: "180", option3: "170", option4: "160", correctOption: 2 },
  { id: 4, questionText: "Which planet is known as the Red Planet?", option1: "Venus", option2: "Mars", option3: "Jupiter", option4: "Saturn", correctOption: 2 },
  { id: 5, questionText: "What is the largest ocean on Earth?", option1: "Atlantic Ocean", option2: "Indian Ocean", option3: "Arctic Ocean", option4: "Pacific Ocean", correctOption: 4 },
  { id: 6, questionText: "Who wrote the Indian National Anthem?", option1: "Bankim Chandra Chatterjee", option2: "Rabindranath Tagore", option3: "Sarojini Naidu", option4: "Subhas Chandra Bose", correctOption: 2 },
  { id: 7, questionText: "What is the speed of light?", option1: "3 × 10⁸ m/s", option2: "2 × 10⁸ m/s", option3: "4 × 10⁸ m/s", option4: "5 × 10⁸ m/s", correctOption: 1 },
  { id: 8, questionText: "Which is the longest river in India?", option1: "Yamuna", option2: "Ganga", option3: "Brahmaputra", option4: "Godavari", correctOption: 2 },
];

// ==================== COMPONENT ====================
const Test: React.FC = () => {
  // Screen states
  const [currentView, setCurrentView] = useState<'categories' | 'modes' | 'test' | 'results'>('categories');
  const [selectedExam, setSelectedExam] = useState<ExamCategory | null>(null);
  const [testMode, setTestMode] = useState<'solo' | 'friend' | null>(null);

  // Test states
  const [testStarted, setTestStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [timeRemaining, setTimeRemaining] = useState(1800); // 30 minutes
  const [testResult, setTestResult] = useState<{
    score: number;
    correctAnswers: number;
    totalQuestions: number;
    timeTaken: number;
  } | null>(null);

  // Timer
  useEffect(() => {
    if (testStarted && timeRemaining > 0) {
      const timer = setInterval(() => {
        setTimeRemaining(prev => {
          if (prev <= 1) {
            handleSubmitTest();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [testStarted, timeRemaining]);

  // Submit Test
  const handleSubmitTest = () => {
    let correctCount = 0;
    SAMPLE_QUESTIONS.forEach(q => {
      if (answers[q.id] === q.correctOption) correctCount++;
    });
    const score = Math.round((correctCount / SAMPLE_QUESTIONS.length) * 100);
    setTestResult({ score, correctAnswers: correctCount, totalQuestions: SAMPLE_QUESTIONS.length, timeTaken: 1800 - timeRemaining });
    setTestStarted(false);
    setCurrentView('results');
  };

  // Start Test
  const startTest = (mode: 'solo' | 'friend') => {
    setTestMode(mode);
    setTestStarted(true);
    setCurrentView('test');
    setCurrentQuestionIndex(0);
    setAnswers({});
    setTimeRemaining(1800);
  };

  // Reset
  const resetTest = () => {
    setCurrentView('categories');
    setSelectedExam(null);
    setTestMode(null);
    setTestStarted(false);
    setCurrentQuestionIndex(0);
    setAnswers({});
    setTestResult(null);
  };

  // ==================== RENDER VIEWS ====================
  // Categories View
  if (currentView === 'categories') {
    return (
      <View className="flex-1 bg-gray-900">
        <View className="bg-gradient-to-r from-blue-600 to-purple-600 pt-16 pb-8 px-6">
          <Text className="text-white text-3xl font-bold mb-2">Choose Your Exam</Text>
          <Text className="text-blue-100">Select a category to start your test</Text>
        </View>
        <ScrollView className="flex-1 px-4 pt-6">
          <View className="flex-row flex-wrap justify-between">
            {EXAM_CATEGORIES.map(exam => (
              <TouchableOpacity
                key={exam.id}
                onPress={() => {
                  setSelectedExam(exam);
                  setCurrentView('modes');
                }}
                className="w-[48%] bg-gray-800 rounded-2xl p-5 mb-4 border border-gray-700"
              >
                <Text className="text-5xl mb-3">{exam.icon}</Text>
                <Text className="text-white font-bold text-lg mb-1">{exam.name}</Text>
                <Text className="text-gray-400 text-sm">{exam.testCount} tests</Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>
    );
  }

  // Modes View
  if (currentView === 'modes' && selectedExam) {
    return (
      <View className="flex-1 bg-gray-900">
        <View className="bg-gradient-to-r from-blue-600 to-purple-600 pt-16 pb-8 px-6">
          <TouchableOpacity onPress={() => setCurrentView('categories')} className="mb-4">
            <Text className="text-white text-lg">← Back</Text>
          </TouchableOpacity>
          <Text className="text-white text-4xl font-bold mb-2">{selectedExam.icon} {selectedExam.name}</Text>
          <Text className="text-blue-100">{selectedExam.testCount} tests available</Text>
        </View>
        <View className="flex-1 px-6 pt-8">
          <TouchableOpacity onPress={() => startTest('solo')} className="bg-gray-800 rounded-2xl p-6 mb-4 border-2 border-blue-500">
            <View className="flex-row items-center">
              <View className="w-16 h-16 bg-blue-600 rounded-full items-center justify-center mr-4"><Text className="text-3xl">🏆</Text></View>
              <View className="flex-1">
                <Text className="text-white font-bold text-xl mb-1">Practice Solo</Text>
                <Text className="text-gray-400">Test yourself and improve your skills</Text>
              </View>
              <Text className="text-white text-2xl">→</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Alert.alert('Coming Soon', 'Friend challenge feature will be available soon!', [{ text: 'OK' }])} className="bg-gray-800 rounded-2xl p-6 border-2 border-purple-500">
            <View className="flex-row items-center">
              <View className="w-16 h-16 bg-purple-600 rounded-full items-center justify-center mr-4"><Text className="text-3xl">👥</Text></View>
              <View className="flex-1">
                <Text className="text-white font-bold text-xl mb-1">Compete with Friend</Text>
                <Text className="text-gray-400">Challenge your friends and compete</Text>
              </View>
              <Text className="text-white text-2xl">→</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  // Test View
  if (currentView === 'test' && testStarted) {
    const question = SAMPLE_QUESTIONS[currentQuestionIndex];
    const progress = ((currentQuestionIndex + 1) / SAMPLE_QUESTIONS.length) * 100;
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;

    return (
      <View className="flex-1 bg-gray-900">
        {/* Timer and Progress */}
        <View className="bg-gray-800 pt-16 pb-4 px-6 border-b border-gray-700">
          <View className="flex-row justify-between items-center mb-3">
            <View className="flex-row items-center">
              <Text className="text-orange-500 text-2xl mr-2">⏱️</Text>
              <Text className="text-white font-bold text-xl">{minutes}:{seconds.toString().padStart(2, '0')}</Text>
            </View>
            <Text className="text-gray-400 font-medium">Question {currentQuestionIndex + 1}/{SAMPLE_QUESTIONS.length}</Text>
          </View>
          <View className="w-full bg-gray-700 rounded-full h-3">
            <View className="bg-blue-600 h-3 rounded-full" style={{ width: `${progress}%` }} />
          </View>
        </View>

        {/* Question Content */}
        <ScrollView className="flex-1 px-6 pt-6">
          <View className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
            <Text className="text-white text-xl font-semibold mb-6 leading-7">{question.questionText}</Text>
            <View className="space-y-3">
              {[question.option1, question.option2, question.option3, question.option4].map((option, idx) => (
                <TouchableOpacity
                  key={idx}
                  onPress={() => setAnswers({ ...answers, [question.id]: idx + 1 })}
                  className={`p-4 rounded-xl border-2 ${answers[question.id] === idx + 1 ? 'border-blue-500 bg-blue-900/30' : 'border-gray-700 bg-gray-900'}`}
                >
                  <Text className={`${answers[question.id] === idx + 1 ? 'text-blue-400' : 'text-white'}`}>
                    <Text className="font-bold">{String.fromCharCode(65 + idx)}. </Text>{option}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </ScrollView>

        {/* Navigation */}
        <View className="bg-gray-800 border-t border-gray-700 p-4 flex-row gap-3">
          <TouchableOpacity
            onPress={() => setCurrentQuestionIndex(Math.max(0, currentQuestionIndex - 1))}
            disabled={currentQuestionIndex === 0}
            className={`flex-1 py-4 border-2 border-gray-600 rounded-xl ${currentQuestionIndex === 0 ? 'opacity-50' : ''}`}
          >
            <Text className="text-white font-semibold text-center">← Previous</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              if (currentQuestionIndex < SAMPLE_QUESTIONS.length - 1) {
                setCurrentQuestionIndex(currentQuestionIndex + 1);
              } else {
                Alert.alert('Submit Test', 'Are you sure you want to submit your test?', [
                  { text: 'Cancel', style: 'cancel' },
                  { text: 'Submit', onPress: handleSubmitTest }
                ]);
              }
            }}
            className="flex-1 py-4 bg-blue-600 rounded-xl"
          >
            <Text className="text-white font-bold text-center">{currentQuestionIndex === SAMPLE_QUESTIONS.length - 1 ? 'Submit 📝' : 'Next →'}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  // Results View
  if (currentView === 'results' && testResult) {
    return (
      <View className="flex-1 bg-gradient-to-br from-green-600 to-blue-600 items-center justify-center px-6">
        <View className="bg-white rounded-3xl p-8 w-full max-w-md">
          <Text className="text-7xl text-center mb-4">{testResult.score >= 80 ? '🎉' : testResult.score >= 60 ? '👏' : '📚'}</Text>
          <Text className="text-gray-800 text-3xl font-bold text-center mb-2">Test Completed!</Text>
          <Text className="text-8xl font-bold text-green-600 text-center my-6">{testResult.score}%</Text>

          <View className="bg-gray-100 rounded-2xl p-6 mb-6">
            <View className="flex-row justify-between mb-3">
              <Text className="text-gray-600">Correct Answers:</Text>
              <Text className="font-bold text-gray-800">{testResult.correctAnswers}/{testResult.totalQuestions}</Text>
            </View>
            <View className="flex-row justify-between">
              <Text className="text-gray-600">Time Taken:</Text>
              <Text className="font-bold text-gray-800">{Math.floor(testResult.timeTaken / 60)}m {testResult.timeTaken % 60}s</Text>
            </View>
          </View>

          <TouchableOpacity onPress={resetTest} className="bg-blue-600 py-4 rounded-xl">
            <Text className="text-white font-bold text-center text-lg">Back to Home 🏠</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return null;
};

export default Test;
