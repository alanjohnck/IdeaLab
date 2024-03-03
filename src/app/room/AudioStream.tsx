// AudioStream.tsx
import React, { useEffect, useState } from "react";
import axios from "axios";

interface VoiceSettings {
  stability: number;
  similarity_boost: number;
}

interface AudioStreamProps {
  voiceId: string;
  text: string;
  apiKey: string;
  voiceSettings: VoiceSettings;
  modelId: string;
}

const AudioStream: React.FC<AudioStreamProps> = ({
  voiceId,
  text,
  apiKey,
  voiceSettings,
  modelId
}) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const startStreaming = async () => {
    setLoading(true);
    setError("");

    const baseUrl = "https://api.elevenlabs.io/v1/text-to-speech";
    const headers = {
      "Content-Type": "application/json",
      "xi-api-key": apiKey,
    };

    const requestBody = {
      text,
      voice_settings: voiceSettings,
      model_id: modelId,
    };

    try {
      const response = await axios.post(`${baseUrl}/${voiceId}`, requestBody, {
        headers,
        responseType: "blob",
      });

      if (response.status === 200) {
        const audio = new Audio(URL.createObjectURL(response.data));
        audio.play();
      } else {
        setError("Error: Unable to stream audio.");
      }
    } catch (error) {
      setError("Error: Unable to stream audio.");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if(text){
    startStreaming(); 
    }
  }, [text]); 

  return (
    <div>
      {/* <button onClick={startStreaming} disabled={loading}>
        Start Streaming
      </button> */}
      {error && <p>{error}</p>}
    </div>
  );
};

export default AudioStream;