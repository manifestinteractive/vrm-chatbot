const local_ip_address = process.env.NEXT_PUBLIC_LOCAL_IP_ADDRESS ?? '10.0.0.250';

const defaults = {
  alltalk_language: process.env.NEXT_PUBLIC_ALLTALK_LANGUAGE ?? 'en',
  alltalk_rvc_pitch: process.env.NEXT_PUBLIC_ALLTALK_RVC_PITCH ?? '1',
  alltalk_rvc_voice: process.env.NEXT_PUBLIC_ALLTALK_RVC_VOICE ?? 'peter_schmalfeldt.pth',
  alltalk_speed: process.env.NEXT_PUBLIC_ALLTALK_SPEED ?? '1.2',
  alltalk_version: process.env.NEXT_PUBLIC_ALLTALK_VERSION ?? 'v2',
  alltalk_voice: process.env.NEXT_PUBLIC_ALLTALK_VOICE ?? 'friendly.wav',
  amica_life_enabled: process.env.NEXT_PUBLIC_AMICA_LIFE_ENABLED ?? 'false',
  amica_sentence_pause: process.env.NEXT_PUBLIC_AMICA_SENTENCE_PAUSE ?? '200', // pause between sentences when talking
  animation_url: process.env.NEXT_PUBLIC_ANIMATION_URL ?? '/animations/idle_loop.vrma',
  autosend_from_mic: 'true',
  bg_color: process.env.NEXT_PUBLIC_BG_COLOR ?? '',
  bg_url: process.env.NEXT_PUBLIC_BG_URL ?? '/bg/bg-blur-dark.jpg',
  chatbot_backend: process.env.NEXT_PUBLIC_CHATBOT_BACKEND ?? 'chatgpt',
  coqui_apikey: process.env.NEXT_PUBLIC_COQUI_APIKEY ?? '',
  coqui_voice_id:
    process.env.NEXT_PUBLIC_COQUI_VOICEID ?? '71c6c3eb-98ca-4a05-8d6b-f8c2b5f9f3a3',
  coquiLocal_url:
    process.env.NEXT_PUBLIC_COQUILOCAL_URL ?? `http://${local_ip_address}:5002`,
  coquiLocal_voiceid: process.env.NEXT_PUBLIC_COQUILOCAL_VOICEID ?? 'p240',
  debug_gfx: 'false',
  elevenlabs_apikey: process.env.NEXT_PUBLIC_ELEVENLABS_APIKEY ?? '',
  elevenlabs_model: process.env.NEXT_PUBLIC_ELEVENLABS_MODEL ?? 'eleven_monolingual_v1',
  elevenlabs_voiceid:
    process.env.NEXT_PUBLIC_ELEVENLABS_VOICEID ?? '21m00Tcm4TlvDq8ikWAM',
  idle_text_prompt: 'No file selected',
  koboldai_stop_sequence:
    process.env.NEXT_PUBLIC_KOBOLDAI_STOP_SEQUENCE ??
    '(End)||[END]||Note||***||You:||User:||</s>',
  koboldai_url: process.env.NEXT_PUBLIC_KOBOLDAI_URL ?? `http://${local_ip_address}:5001`,
  koboldai_use_extra: process.env.NEXT_PUBLIC_KOBOLDAI_USE_EXTRA ?? 'false',
  language: 'en',
  llamacpp_stop_sequence:
    process.env.NEXT_PUBLIC_LLAMACPP_STOP_SEQUENCE ??
    '(End)||[END]||Note||***||You:||User:||</s>',
  llamacpp_url: process.env.NEXT_PUBLIC_LLAMACPP_URL ?? `http://${local_ip_address}:8080`,
  localXTTS_url:
    process.env.NEXT_PUBLIC_LOCALXTTS_URL ?? `http://${local_ip_address}:7851`,
  max_time_interval_sec: '20',
  min_time_interval_sec: '10',
  name: process.env.NEXT_PUBLIC_NAME ?? 'Peter',
  ollama_model: process.env.NEXT_PUBLIC_OLLAMA_MODEL ?? 'wizardlm-2-7b',
  ollama_url: process.env.NEXT_PUBLIC_OLLAMA_URL ?? `http://${local_ip_address}:11434`,
  openai_apikey: process.env.NEXT_PUBLIC_OPENAI_APIKEY ?? 'default',
  openai_model: process.env.NEXT_PUBLIC_OPENAI_MODEL ?? 'wizardlm-2-7b',
  openai_tts_apikey: process.env.NEXT_PUBLIC_OPENAI_TTS_APIKEY ?? '',
  openai_tts_model: process.env.NEXT_PUBLIC_OPENAI_TTS_MODEL ?? 'tts-1',
  openai_tts_url: process.env.NEXT_PUBLIC_OPENAI_TTS_URL ?? 'https://api.openai.com',
  openai_tts_voice: process.env.NEXT_PUBLIC_OPENAI_TTS_VOICE ?? 'nova',
  openai_url: process.env.NEXT_PUBLIC_OPENAI_URL ?? `http://${local_ip_address}:1234`,
  openai_whisper_apikey: process.env.NEXT_PUBLIC_OPENAI_WHISPER_APIKEY ?? '',
  openai_whisper_model: process.env.NEXT_PUBLIC_OPENAI_WHISPER_MODEL ?? 'whisper-1',
  openai_whisper_url:
    process.env.NEXT_PUBLIC_OPENAI_WHISPER_URL ?? 'https://api.openai.com',
  openrouter_apikey: process.env.NEXT_PUBLIC_OPENROUTER_APIKEY ?? '',
  openrouter_model: process.env.NEXT_PUBLIC_OPENROUTER_MODEL ?? 'openai/gpt-3.5-turbo',
  openrouter_url:
    process.env.NEXT_PUBLIC_OPENROUTER_URL ?? 'https://openrouter.ai/api/v1',
  persona_name: process.env.NEXT_PUBLIC_PERSONA_NAME ?? 'Peter',
  persona_personality_code: process.env.NEXT_PUBLIC_PERSONA_PERSONALITY_CODE ?? 'ENTJ',
  persona_bio: process.env.NEXT_PUBLIC_PERSONA_BIO ?? '',
  persona_likes: process.env.NEXT_PUBLIC_PERSONA_LIKES ?? '',
  persona_dislikes: process.env.NEXT_PUBLIC_PERSONA_DISLIKES ?? '',
  piper_url: process.env.NEXT_PUBLIC_PIPER_URL ?? 'https://i-love-amica.com:5000/tts',
  rvc_enabled: process.env.NEXT_PUBLIC_RVC_ENABLED ?? 'false',
  rvc_f0_method: process.env.NEXT_PUBLIC_RVC_METHOD ?? 'pm',
  rvc_f0_upkey: process.env.NEXT_PUBLIC_RVC_F0_UPKEY ?? '0',
  rvc_filter_radius: process.env.NEXT_PUBLIC_RVC_FILTER_RADIUS ?? '3',
  rvc_index_path: process.env.NEXT_PUBLIC_RVC_INDEX_PATH ?? 'none',
  rvc_index_rate: process.env.NEXT_PUBLIC_RVC_INDEX_RATE ?? '0.66',
  rvc_model_name: process.env.NEXT_PUBLIC_RVC_MODEL_NAME ?? 'model_name.pth',
  rvc_protect: process.env.NEXT_PUBLIC_RVC_PROTECT ?? '0.33',
  rvc_resample_sr: process.env.NEXT_PUBLIC_RVC_RESAMPLE_SR ?? '0',
  rvc_rms_mix_rate: process.env.NEXT_PUBLIC_RVC_RMS_MIX_RATE ?? '1',
  rvc_url:
    process.env.NEXT_PUBLIC_RVC_URL ?? `http://${local_ip_address}:8001/voice2voice`,
  show_add_to_homescreen: 'false',
  show_introduction: 'false',
  speecht5_speaker_embedding_url:
    process.env.NEXT_PUBLIC_SPEECHT5_SPEAKER_EMBEDDING_URL ??
    '/speecht5_speaker_embeddings/cmu_us_slt_arctic-wav-arctic_a0001.bin',
  stt_backend: process.env.NEXT_PUBLIC_STT_BACKEND ?? 'whisper_browser',
  system_prompt: process.env.NEXT_PUBLIC_SYSTEM_PROMPT ?? '',
  time_before_idle_sec: '20',
  time_to_sleep_sec: '90',
  tts_backend: process.env.NEXT_PUBLIC_TTS_BACKEND ?? 'localXTTS',
  tts_muted: 'false',
  vision_backend: process.env.NEXT_PUBLIC_VISION_BACKEND ?? 'none',
  vision_llamacpp_url:
    process.env.NEXT_PUBLIC_VISION_LLAMACPP_URL ?? `http://${local_ip_address}:8081`,
  vision_ollama_model: process.env.NEXT_PUBLIC_VISION_OLLAMA_MODEL ?? 'llava',
  vision_ollama_url:
    process.env.NEXT_PUBLIC_VISION_OLLAMA_URL ?? `http://${local_ip_address}:11434`,
  vision_system_prompt:
    process.env.NEXT_PUBLIC_VISION_SYSTEM_PROMPT ??
    `You are a friendly human named Peter. Describe the image in detail. Let's start the conversation.`,
  voice_url: process.env.NEXT_PUBLIC_VOICE_URL ?? '',
  vrm_hash: '',
  vrm_save_type: 'web',
  vrm_url: process.env.NEXT_PUBLIC_VRM_HASH ?? '/vrm/peter-schmalfeldt.vrm',
  wake_word_enabled: 'true',
  wake_word: 'Hello',
  whispercpp_url:
    process.env.NEXT_PUBLIC_WHISPERCPP_URL ?? `http://${local_ip_address}:8080`,
  youtube_videoid: '',
};

function prefixed(key: string) {
  return `chatvrm_${key}`;
}

export function config(key: string): string {
  if (localStorage.hasOwnProperty(prefixed(key))) {
    return (<any>localStorage).getItem(prefixed(key));
  }

  if (defaults.hasOwnProperty(key)) {
    return (<any>defaults)[key];
  }

  throw new Error(`config key not found: ${key}`);
}

export function updateConfig(key: string, value: string) {
  if (defaults.hasOwnProperty(key)) {
    localStorage.setItem(prefixed(key), value);
    return;
  }

  throw new Error(`config key not found: ${key}`);
}

export function defaultConfig(key: string): string {
  if (defaults.hasOwnProperty(key)) {
    return (<any>defaults)[key];
  }

  throw new Error(`config key not found: ${key}`);
}

export function resetConfig() {
  Object.entries(defaults).forEach(([key, value]) => {
    updateConfig(key, value);
  });
}
