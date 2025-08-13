import { useState } from "react";
import { Header } from "./components/Header";
import { BlurredText } from "./components/BlurredText";
import { CTAButtons } from "./components/CTAButtons";
import { ArrowRight } from "lucide-react";
import FacilitiesPage from "./pages/FacilitiesPage";
import JobsPage from "./pages/JobsPage";
import CommunityPageSimple from "./pages/CommunityPageSimple";
import HealthAssessmentPage from "./pages/HealthAssessmentPage";
import ChatPage from "./pages/ChatPage";
import StartPage from "./pages/StartPage";


function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [initialPrompt, setInitialPrompt] = useState<string | undefined>(undefined);

  const handleStartBuilding = () => {
    setCurrentPage('start');
  };

  const handleStartChat = (prompt?: string) => {
    setInitialPrompt(prompt);
    setCurrentPage('chat');
  };

  const handleLearnMore = () => {
    console.log('Learn More clicked');
  };

  const handleContactSales = () => {
    console.log('Contact Sales clicked');
  };

  const handleGetStarted = () => {
    console.log('Get Started clicked');
  };



  const words = [
    "Elderberry", "Is", "An", "AI-Powered", "Platform", "For", "Matching", "Care", "Services", "Perfectly"
  ];

  // 페이지 렌더링 함수
  const renderPage = () => {
    switch (currentPage) {
      case 'facilities':
        return <FacilitiesPage />;
      case 'jobs':
        return <JobsPage />;
      case 'community':
        return <CommunityPageSimple />;
      case 'health-assessment':
        return <HealthAssessmentPage />;
      case 'start':
        return <StartPage onStartChat={handleStartChat} onGoHome={() => setCurrentPage('home')} />;
      case 'chat':
        return <ChatPage 
          onGoHome={() => setCurrentPage('start')} 
          onGoMainPage={() => setCurrentPage('home')}
          initialPrompt={initialPrompt} 
        />;
      default:
        return <HomePage />;
    }
  };

  // 홈페이지 컴포넌트
  const HomePage = () => (
    <div className="min-h-screen w-full bg-white">
      {/* Header */}
      <Header onNavigate={setCurrentPage} currentPage={currentPage} />

      {/* Hero Section */}
      <section 
        className="relative w-full min-h-screen flex flex-col items-center justify-center px-6 lg:px-0 pt-16"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.85)), url('https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=800')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Main Heading */}
        <div className="flex flex-col items-center max-w-4xl mx-auto mb-16 relative z-10">
          {/* Main heading with blur effects */}
          <div className="flex flex-wrap justify-center items-center gap-x-2 gap-y-4 mb-12">
            {words.map((word, index) => (
              <BlurredText key={index} text={word} />
            ))}
          </div>

          {/* Sub Heading */}
          <div className="relative mb-12">
            <div className="absolute inset-0 blur-sm opacity-50 pointer-events-none">
              <p className="hero-subheading text-text-secondary text-center max-w-md">
                AI 기반 요양보호사 매칭 시스템으로 최적의 돌봄 서비스를 찾아드립니다.
              </p>
            </div>
            <p className="relative hero-subheading text-text-secondary text-center max-w-md">
              AI 기반 요양보호사 매칭 시스템으로 최적의 돌봄 서비스를 찾아드립니다.
            </p>
          </div>

          {/* CTA Buttons */}
          <CTAButtons
            onStartBuilding={handleStartBuilding}
            onLearnMore={handleLearnMore}
          />
        </div>
      </section>

      {/* 시설찾기 Section */}
      <section className="relative w-full py-32 bg-gradient-to-b from-white/5 to-transparent">
        <div className="max-w-6xl mx-auto px-6 lg:px-0">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-text-main text-5xl font-semibold leading-tight tracking-tight">
                믿을 수 있는 요양시설 찾기
              </h2>

              <p className="text-text-muted text-lg leading-relaxed max-w-sm">
                우리 지역의 검증된 요양시설을 쉽게 비교하고 선택하세요. 평점, 리뷰, 시설 정보를 한눈에 확인할 수 있습니다.
              </p>

              <div 
                onClick={() => setCurrentPage('facilities')}
                className="flex items-center gap-2 text-primary hover:text-primary-dark transition-colors cursor-pointer"
              >
                <span className="font-semibold">시설 둘러보기</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>

            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="요양시설 내부 모습" 
                className="w-full h-auto rounded-xl border border-border-light shadow-2xl" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* 구인구직 Section */}
      <section className="relative w-full py-32 bg-gradient-to-b from-white/5 to-transparent">
        <div className="max-w-6xl mx-auto px-6 lg:px-0">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <img 
                src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="요양보호사 근무 모습" 
                className="w-full h-auto rounded-xl border border-border-light shadow-2xl" 
              />
            </div>

            <div className="space-y-8 order-1 lg:order-2">
              <h2 className="text-text-main text-5xl font-semibold leading-tight tracking-tight">
                전문 요양보호사 채용
              </h2>

              <p className="text-text-muted text-lg leading-relaxed max-w-sm">
                경험 많은 요양보호사를 찾거나 최적의 일자리를 발견하세요. 전문적인 매칭 시스템으로 완벽한 연결을 도와드립니다.
              </p>

              <div 
                onClick={() => setCurrentPage('jobs')}
                className="flex items-center gap-2 text-primary hover:text-primary-dark transition-colors cursor-pointer"
              >
                <span className="font-semibold">채용정보 보기</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 커뮤니티 Section */}
      <section className="relative w-full py-32 bg-gradient-to-b from-white/5 to-transparent">
        <div className="max-w-6xl mx-auto px-6 lg:px-0">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-text-main text-5xl font-semibold leading-tight tracking-tight">
                따뜻한 소통 커뮤니티
              </h2>

              <p className="text-text-muted text-lg leading-relaxed max-w-sm">
                요양보호사와 가족들이 함께 모여 경험을 나누고 서로 도움을 주는 따뜻한 공간입니다. 실무 노하우부터 마음의 위로까지.
              </p>

              <div 
                onClick={() => setCurrentPage('community')}
                className="flex items-center gap-2 text-primary hover:text-primary-dark transition-colors cursor-pointer"
              >
                <span className="font-semibold">커뮤니티 참여하기</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>

            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="사람들이 함께 대화하는 모습" 
                className="w-full h-auto rounded-xl border border-border-light shadow-2xl" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* 건강평가 Section */}
      <section className="relative w-full py-32 bg-gradient-to-b from-white/5 to-transparent">
        <div className="max-w-6xl mx-auto px-6 lg:px-0">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <img 
                src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="건강 검진을 받는 어르신" 
                className="w-full h-auto rounded-xl border border-border-light shadow-2xl" 
              />
            </div>

            <div className="space-y-8 order-1 lg:order-2">
              <h2 className="text-text-main text-5xl font-semibold leading-tight tracking-tight">
                종합 건강평가 시스템
              </h2>

              <p className="text-text-muted text-lg leading-relaxed max-w-sm">
                체계적인 건강 상태 평가를 통해 개인 맞춤형 케어 계획을 제공합니다. 전문적인 분석과 권장사항으로 건강한 노후를 준비하세요.
              </p>

              <div 
                onClick={() => setCurrentPage('health-assessment')}
                className="flex items-center gap-2 text-primary hover:text-primary-dark transition-colors cursor-pointer"
              >
                <span className="font-semibold">건강평가 시작하기</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative w-full py-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-0 text-center">
          <h2 className="text-text-main text-4xl font-semibold mb-8 tracking-tight">
            지금 바로 시작해보세요
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <button
              onClick={handleContactSales}
              className="border border-primary text-primary px-6 py-3 rounded-xl font-semibold hover:bg-primary hover:text-white transition-all duration-200"
            >
              문의하기
            </button>
            <button
              onClick={handleGetStarted}
              className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-xl font-semibold shadow-lg transition-all duration-200"
            >
              채팅 시작하기
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative w-full py-16 border-t border-border-light">
        <div className="max-w-6xl mx-auto px-6 lg:px-0 text-center">
          <p className="text-text-muted">
            © 2024 Elderberry. Built with React + TypeScript + Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );

  return (
    <div className="min-h-screen w-full bg-white">
      {currentPage !== 'chat' && currentPage !== 'start' && (
        <Header onNavigate={setCurrentPage} currentPage={currentPage} />
      )}
      {renderPage()}
    </div>
  );
}

export default App;