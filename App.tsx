import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { GameProvider } from './src/context/GameContext';
import { SplashScreen } from './src/screens/SplashScreen';
import { MainMenuScreen } from './src/screens/MainMenuScreen';
import { GameModeScreen } from './src/screens/GameModeScreen';
import { PlayerCountScreen } from './src/screens/PlayerCountScreen';
import { TrueFalseGameScreen } from './src/screens/TrueFalseGameScreen';
import { WhichMoreGameScreen } from './src/screens/WhichMoreGameScreen';
import { ResultsScreen } from './src/screens/ResultsScreen';
import { PlayerNamesScreen } from './src/screens/PlayerNamesScreen';
import { EmojiFoodGameScreen } from './src/screens/EmojiFoodGameScreen';
import { SoundGameScreen } from './src/screens/SoundGameScreen';
import { GroupNamesScreen } from './src/screens/GroupNamesScreen';
import { SpyGameScreen } from './src/screens/SpyGameScreen';
import { audioService } from './src/services/AudioService';

type Screen = 'Splash' | 'MainMenu' | 'GameMode' | 'PlayerCount' | 'PlayerNames' | 'GroupNames' | 'TrueFalseGame' | 'WhichMoreGame' | 'EmojiFoodGame' | 'SoundGame' | 'SpyGame' | 'Results';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('Splash');

  useEffect(() => {
    // Ses sistemini başlat
    audioService.initialize();

    return () => {
      audioService.cleanup();
    };
  }, []);

  const navigate = (screen: Screen) => {
    setCurrentScreen(screen);
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'Splash':
        return <SplashScreen onFinish={() => navigate('MainMenu')} />;
      case 'MainMenu':
        return <MainMenuScreen onNavigate={navigate} />;
      case 'GameMode':
        return <GameModeScreen onNavigate={navigate} />;
      case 'PlayerCount':
        return <PlayerCountScreen onNavigate={navigate} />;
      case 'PlayerNames':
        return <PlayerNamesScreen onNavigate={navigate} />;
      case 'GroupNames':
        return <GroupNamesScreen onNavigate={navigate} />;
      case 'TrueFalseGame':
        return <TrueFalseGameScreen onNavigate={navigate} />;
      case 'WhichMoreGame':
        return <WhichMoreGameScreen onNavigate={navigate} />;
      case 'EmojiFoodGame':
        return <EmojiFoodGameScreen onNavigate={navigate} />;
      case 'SoundGame':
        return <SoundGameScreen onNavigate={navigate} />;
      case 'SpyGame':
        return <SpyGameScreen onNavigate={navigate} />;
      case 'Results':
        return <ResultsScreen onNavigate={navigate} />;
      default:
        return <MainMenuScreen onNavigate={navigate} />;
    }
  };

  return (
    <GameProvider>
      <StatusBar style="light" />
      {renderScreen()}
    </GameProvider>
  );
}
