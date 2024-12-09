import { useRef, useState } from "react";

export const usePlayer = () => {

    const audioRef = useRef<HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [volume, setVolume] = useState(1);

    const onClickPlay = () => {
        if (audioRef.current) {
            isPlaying ? audioRef.current.pause() : audioRef.current.play();
            setIsPlaying(!isPlaying);
        }
    }

    const handleLoadCurrentTime = () => {
        if (audioRef.current) {
            setCurrentTime(audioRef.current.currentTime);
        }
    };

    const handleLoadDuration = () => {
        if (audioRef.current) {
            setDuration(audioRef.current.duration);
        }
    };

    const handleSliderDurationChange = ({target}: React.ChangeEvent<HTMLInputElement>) => {
        if(audioRef.current){
            const {value} = target;
            audioRef.current.currentTime = Number(value);
            setCurrentTime(Number(value));
        }
    }

    const handleVolumeChange = ({target}: React.ChangeEvent<HTMLInputElement>) => {
        const newVolume = Number(target.value);
        setVolume(newVolume);
        if (audioRef.current) {
            audioRef.current.volume = newVolume;
        }
    };


    return {
        audioRef,
        currentTime,
        duration,
        isPlaying,
        onClickPlay,
        handleLoadCurrentTime,
        handleLoadDuration,
        handleVolumeChange,
        handleSliderDurationChange,
        volume
    }
}