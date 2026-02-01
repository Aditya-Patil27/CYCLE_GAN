import { useState, useRef } from 'react'

// Photo configuration - easily swap these URLs
const photos = [
  { id: 1, src: '/bhau.jpeg', name: 'MR. Aditya Rahul Saraf', role: 'leader' },
  { id: 2, src: '/bro1.jpeg', name: 'Bro 1', role: 'medium' },
  { id: 3, src: '/bro2.jpeg', name: 'Bro 2', role: 'medium' },
  { id: 4, src: '/squad1.jpeg', name: 'Squad 1', role: 'squad' },
  { id: 5, src: '/squad2.jpeg', name: 'Squad 2', role: 'squad' },
  { id: 6, src: '/squad3.jpeg', name: 'Squad 3', role: 'squad' },
  { id: 7, src: '/squad4.jpeg', name: 'Squad 4', role: 'squad' },
  { id: 8, src: '/squad5.jpeg', name: 'Squad 5', role: 'squad' },
]

// Login Page Component
function LoginPage({ onEnter, onStartAudio }) {
  const handleClick = () => {
    onStartAudio()
  }

  return (
    <div
      className="relative w-screen h-screen overflow-hidden bg-black cursor-pointer"
      onClick={handleClick}
    >
      {/* Video Background */}
      <video
        src="/vid1.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-80"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 pointer-events-none" />

      {/* Click to play audio hint */}
      <div className="absolute top-4 left-0 right-0 z-20 text-center">
        <p className="text-white/60 text-sm animate-pulse">Click anywhere to play music</p>
      </div>

      {/* Center Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-3d tracking-wide mb-4 text-center px-4">
          WELCOME
        </h1>
        <p className="text-white/90 text-lg md:text-xl mb-8 text-center px-4 text-3d-subtle">
          A Special Birthday Celebration Awaits...
        </p>

        {/* Enter Button */}
        <button
          onClick={(e) => {
            e.stopPropagation()
            onStartAudio()
            onEnter()
          }}
          className="px-10 py-4 glass-dark rounded-full text-white font-bold text-lg md:text-xl tracking-wide border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300"
        >
          ENTER
        </button>
      </div>
    </div>
  )
}

// Custom Birthday Message Component - Glassmorphism
function BirthdayMessage() {
  return (
    <div className="relative">
      {/* Message Box - Glassmorphism */}
      <div className="glass-dark rounded-2xl p-2 md:p-6 max-w-[280px] md:max-w-sm lg:max-w-md mx-auto border border-white/10">
        {/* Message Content */}
        <div className="text-center flex flex-col items-center justify-center">
          <h3 className="text-sm md:text-2xl font-bold mb-1 md:mb-3 neon-text">
            🎂 A MESSAGE FOR YOU 🎂
          </h3>
          <p className="text-white/90 text-xs md:text-xl lg:text-2xl leading-relaxed text-center font-light">
            {/* CUSTOMIZE YOUR MESSAGE HERE */}
            Happiest Birthday Saraf 🥳<br />
            Uss din ka shapat pura kar saleeee 🔥<br />
            20 ka hogaya na abhiii 😭<br />
            Enjoy your day to its fullest brother<br />
            <span className="text-cyan-400 font-semibold">Have Great One Ahead ✨🫂</span>
          </p>
        </div>
      </div>

      {/* Steve dancing next to message - hidden on mobile */}
      <div className="absolute -right-24 md:-right-32 lg:-right-36 top-1/2 transform -translate-y-1/2 hidden md:block">
        <video
          src="/steve-dance.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 object-contain"
          style={{ background: 'transparent' }}
        />
      </div>
    </div>
  )
}

// Leader Frame Component - Golden Hour Glow
function LeaderFrame({ photo }) {
  return (
    <div className="relative float-animation">
      {/* Gradient Border Wrapper */}
      <div className="gradient-border-gold pulse-glow rounded-3xl">
        <div className="bg-black rounded-3xl overflow-hidden">
          <img
            src={photo.src}
            alt={photo.name}
            className="w-[120px] h-[120px] md:w-[280px] md:h-[280px] lg:w-[320px] lg:h-[320px] object-cover"
          />
        </div>
      </div>
      {/* Name Tag - Elongated Curved Rectangle */}
      <div className="absolute -bottom-6 md:-bottom-10 left-1/2 transform -translate-x-1/2">
        <div className="bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 rounded-full px-4 md:px-10 py-1.5 md:py-3 shadow-[0_0_20px_rgba(255,215,0,0.5)]">
          <span className="font-bold text-black text-[10px] md:text-base tracking-wide drop-shadow-sm whitespace-nowrap">{photo.name}</span>
        </div>
      </div>
    </div>
  )
}

// VIP Frame Component - Future Tech Cyan
function VIPFrame({ photo }) {
  return (
    <div className="relative">
      {/* Gradient Border Wrapper */}
      <div className="gradient-border-cyan cyan-glow rounded-2xl">
        <div className="bg-black rounded-2xl overflow-hidden">
          <img
            src={photo.src}
            alt={photo.name}
            className="w-[70px] h-[70px] md:w-[160px] md:h-[160px] lg:w-[200px] lg:h-[200px] object-cover"
          />
        </div>
      </div>
    </div>
  )
}

// Supporter Frame Component - Warm Gradient Circle
function SupporterFrame({ photo }) {
  return (
    <div className="relative group">
      {/* Gradient Border Wrapper */}
      <div className="gradient-border-warm warm-glow rounded-full transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(234,88,12,0.6),0_0_50px_rgba(147,51,234,0.4)]">
        <div className="bg-black rounded-full overflow-hidden">
          <img
            src={photo.src}
            alt={photo.name}
            className="w-[40px] h-[40px] md:w-[80px] md:h-[80px] lg:w-[100px] lg:h-[100px] object-cover"
          />
        </div>
      </div>
    </div>
  )
}

// Header Component - Neon Style
function Header() {
  return (
    <div className="absolute top-2 md:top-8 left-0 right-0 z-40 flex flex-col items-center px-2 md:px-4">
      <div className="text-center">
        <h2 className="text-base md:text-4xl lg:text-5xl font-bold neon-text tracking-wide">
          HAPPY BIRTHDAY SARAF
        </h2>
      </div>

      {/* Minecraft Achievement Box */}
      <div className="mt-1 md:mt-3">
        <div className="bg-gradient-to-b from-gray-800 to-gray-900 border-2 border-gray-600 rounded-lg p-2 md:p-4 shadow-[0_0_20px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.1)]">
          <div className="flex items-center gap-2 md:gap-3">
            {/* Achievement Icon */}
            <div className="w-8 h-8 md:w-12 md:h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded flex items-center justify-center shadow-[inset_0_-2px_4px_rgba(0,0,0,0.3)]">
              <span className="text-base md:text-2xl">🏆</span>
            </div>
            {/* Achievement Text */}
            <div className="flex flex-col">
              <span className="text-yellow-400 text-[10px] md:text-sm font-bold tracking-wide">Achievement Unlocked!</span>
              <span className="text-white text-xs md:text-base font-bold">Level 21</span>
              <span className="text-gray-400 text-[10px] md:text-xs">EST. 2006</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Level Progress Bar Component - Neon Style
function LevelBar() {
  return (
    <div className="w-full max-w-[200px] md:max-w-xs mx-auto px-4">
      {/* Level number in center */}
      <div className="text-center mb-1 md:mb-2">
        <span className="text-cyan-400 text-sm md:text-xl font-bold" style={{ textShadow: '0 0 10px rgba(6, 182, 212, 0.5)' }}>
          21
        </span>
      </div>

      {/* Thin XP bar - Neon style */}
      <div className="relative h-1.5 md:h-3 bg-black/60 rounded-full overflow-hidden border border-cyan-500/30 neon-bar">
        {/* XP Fill - 1% progress toward level 22 */}
        <div
          className="absolute inset-y-0 left-0 bg-gradient-to-r from-cyan-500 to-cyan-300 rounded-full"
          style={{ width: '1%' }}
        />
      </div>
    </div>
  )
}

// Squad Strip Component
function SquadStrip({ squadPhotos }) {
  return (
    <div className="absolute bottom-0 left-0 right-0 z-40 bg-gradient-to-t from-black/90 via-black/60 to-transparent py-2 md:py-6">
      {/* Birthday Message - Above Level Bar */}
      <div className="mb-2 md:mb-6 flex justify-center">
        <BirthdayMessage />
      </div>

      {/* Level Progress Bar */}
      <div className="mb-2 md:mb-5">
        <LevelBar />
      </div>

      <div className="flex justify-center items-center gap-2 md:gap-4 lg:gap-6 flex-wrap px-2 md:px-4">
        {squadPhotos.map((photo) => (
          <SupporterFrame key={photo.id} photo={photo} />
        ))}
      </div>
      <p className="text-center mt-2 md:mt-4 text-[10px] md:text-base font-semibold tracking-wider neon-text px-2">
        ✨शुभेच्छुक खोली क्रमांक 17 आणि खांड्रे मित्रमंडळ✨
      </p>
    </div>
  )
}

// Main Page Component
function MainPage() {
  const [photoData] = useState(photos)

  const leaderPhoto = photoData.find(p => p.role === 'leader')
  const mediumPhotos = photoData.filter(p => p.role === 'medium')
  const squadPhotos = photoData.filter(p => p.role === 'squad')

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900">
      {/* Background Video */}
      <video
        src="/vid2.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-70"
      />

      {/* Neon Vignette Overlay */}
      <div className="absolute inset-0 vignette-neon pointer-events-none" />

      {/* Dark Overlay for readability */}
      <div className="absolute inset-0 bg-black/20 pointer-events-none" />

      {/* Header */}
      <Header />

      {/* Main Photo Area - Desktop Layout */}
      <div className="hidden md:flex absolute inset-0 items-center justify-between pt-40 pb-80 px-16 lg:px-24">
        {/* LEFT SIDE - Leader photo */}
        <div className="flex items-center justify-center w-48 lg:w-64">
          <LeaderFrame photo={leaderPhoto} />
        </div>

        {/* RIGHT SIDE - VIP photos stacked vertically */}
        <div className="flex flex-col items-center justify-center gap-6 lg:gap-8 w-48 lg:w-64">
          {mediumPhotos.map((photo) => (
            <VIPFrame key={photo.id} photo={photo} />
          ))}
        </div>
      </div>

      {/* Main Photo Area - Mobile Layout */}
      <div className="flex md:hidden flex-col items-center justify-start h-full pt-24 pb-[340px] gap-2 px-2 overflow-y-auto">
        <LeaderFrame photo={leaderPhoto} />
        <div className="flex gap-2 mt-4 flex-wrap justify-center">
          {mediumPhotos.map((photo) => (
            <VIPFrame key={photo.id} photo={photo} />
          ))}
        </div>
      </div>

      {/* Squad Strip */}
      <SquadStrip squadPhotos={squadPhotos} />
    </div>
  )
}

function App() {
  const [showMain, setShowMain] = useState(false)
  const [audioStarted, setAudioStarted] = useState(false)
  const audioRef = useRef(null)

  const startAudio = () => {
    if (audioRef.current && !audioStarted) {
      audioRef.current.currentTime = 0
      audioRef.current.volume = 0.5
      audioRef.current.play().then(() => {
        setAudioStarted(true)
      }).catch(() => {})
    }
  }

  return (
    <>
      {/* Background Audio */}
      <audio
        ref={audioRef}
        src="/music.mp3"
        loop
        preload="auto"
      />

      {!showMain ? (
        <LoginPage onEnter={() => setShowMain(true)} onStartAudio={startAudio} />
      ) : (
        <MainPage />
      )}
    </>
  )
}

export default App
