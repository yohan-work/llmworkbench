import { useState } from 'react';
import Section from '../layout/Section';
import { models } from '../../data/models';
import {
  Play,
  Key,
  AlertCircle,
  Loader2,
  Copy,
  Check,
  Trash2,
  Eye,
  EyeOff,
} from 'lucide-react';

interface APIKeys {
  [modelId: string]: string;
}

interface Message {
  role: 'user' | 'assistant';
  content: string;
  modelId?: string;
}

export default function PlaygroundSection() {
  const [selectedModel, setSelectedModel] = useState(models[0].id);
  const [apiKeys, setApiKeys] = useState<APIKeys>({});
  const [showApiKey, setShowApiKey] = useState(false);
  const [prompt, setPrompt] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const currentModel = models.find((m) => m.id === selectedModel);

  const handleApiKeyChange = (modelId: string, key: string) => {
    setApiKeys((prev) => ({ ...prev, [modelId]: key }));
  };

  const handleSubmit = async () => {
    if (!prompt.trim()) return;

    const userMessage: Message = { role: 'user', content: prompt };
    setMessages((prev) => [...prev, userMessage]);
    setPrompt('');
    setIsLoading(true);

    // 데모 응답 시뮬레이션 (실제 구현에서는 API 호출)
    await new Promise((resolve) => setTimeout(resolve, 1500));

    const demoResponses: Record<string, string> = {
      'gpt-5.1': `GPT-5.1의 응답입니다.

이것은 시연용 응답입니다. 실제 사용을 위해서는 OpenAI API 키를 입력하고, 백엔드 API를 구현해야 합니다.

\`\`\`python
# 예시 코드
def hello_world():
    print("Hello from GPT-5.1!")
\`\`\`

실제 API 연동 시에는 이 위치에서 OpenAI API를 호출하게 됩니다.`,
      'gemini-3.0': `Gemini 3.0의 응답입니다.

이것은 데모 응답입니다. 실제로는 Google AI API를 사용하여 Gemini 모델에 요청을 보내야 합니다.

Gemini의 특징:
- 멀티모달 처리
- 긴 컨텍스트 지원
- 실시간 정보 접근

API 키를 입력하면 실제 모델과 대화할 수 있습니다.`,
      'claude-opus-4.5': `Claude Opus 4.5의 응답입니다.

안녕하세요! 이것은 시연용 응답입니다. 실제 Claude API를 사용하려면 Anthropic API 키가 필요합니다.

Claude의 특징:
1. 안전하고 정확한 응답
2. 창의적 글쓰기 능력
3. 긴 문서 분석

실제 구현에서는 Anthropic Messages API를 통해 요청을 처리합니다.`,
      'grok-3': `Grok 3의 응답입니다! 🚀

헤이! 데모 모드로 실행 중이에요. 실제 Grok API 연동을 위해서는 xAI API 키가 필요합니다.

Grok의 특징:
- 실시간 정보 접근
- 유머러스한 대화
- X(트위터) 연동

API 키를 넣으면 진짜 Grok과 대화할 수 있어요! 😎`,
    };

    const assistantMessage: Message = {
      role: 'assistant',
      content: demoResponses[selectedModel] || '응답을 생성할 수 없습니다.',
      modelId: selectedModel,
    };

    setMessages((prev) => [...prev, assistantMessage]);
    setIsLoading(false);
  };

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const handleClear = () => {
    setMessages([]);
  };

  const formatMessage = (text: string) => {
    const parts = text.split(/(```[\s\S]*?```)/);
    return parts.map((part, index) => {
      if (part.startsWith('```')) {
        const content = part.replace(/```\w*\n?/, '').replace(/```$/, '');
        return (
          <pre
            key={index}
            className="my-2 p-3 bg-navy-900/80 rounded-lg overflow-x-auto text-sm font-mono text-gray-300"
          >
            <code>{content.trim()}</code>
          </pre>
        );
      }
      return (
        <span key={index} className="whitespace-pre-wrap">
          {part}
        </span>
      );
    });
  };

  return (
    <Section
      id="playground"
      title="플레이그라운드"
      subtitle="직접 각 모델에 질문을 던져보고 응답을 비교해보세요. API 키를 입력하면 실제 모델과 대화할 수 있습니다."
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Settings Panel */}
        <div className="lg:col-span-1 space-y-4">
          {/* Model Selection */}
          <div className="glass-card p-5">
            <h3 className="text-white font-semibold mb-4">모델 선택</h3>
            <div className="space-y-2">
              {models.map((model) => (
                <button
                  key={model.id}
                  onClick={() => setSelectedModel(model.id)}
                  className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all border ${
                    selectedModel === model.id
                      ? 'border-transparent'
                      : 'border-white/5 hover:border-white/20'
                  }`}
                  style={{
                    backgroundColor:
                      selectedModel === model.id
                        ? `${model.color}20`
                        : 'rgba(15, 22, 41, 0.5)',
                  }}
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `${model.color}30` }}
                  >
                    <span
                      className="font-bold text-sm"
                      style={{ color: model.color }}
                    >
                      {model.name.charAt(0)}
                    </span>
                  </div>
                  <div className="text-left">
                    <div
                      className={`font-medium ${
                        selectedModel === model.id
                          ? 'text-white'
                          : 'text-gray-400'
                      }`}
                    >
                      {model.name}
                    </div>
                    <div className="text-xs text-gray-500">{model.provider}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* API Key Input */}
          <div className="glass-card p-5">
            <div className="flex items-center gap-2 mb-4">
              <Key className="w-4 h-4 text-neon-blue" />
              <h3 className="text-white font-semibold">API 키</h3>
            </div>

            <div className="relative">
              <input
                type={showApiKey ? 'text' : 'password'}
                value={apiKeys[selectedModel] || ''}
                onChange={(e) =>
                  handleApiKeyChange(selectedModel, e.target.value)
                }
                placeholder={`${currentModel?.provider} API 키 입력`}
                className="w-full px-4 py-3 pr-10 bg-navy-700/50 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-neon-blue/50 text-sm"
              />
              <button
                onClick={() => setShowApiKey(!showApiKey)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors"
              >
                {showApiKey ? (
                  <EyeOff className="w-4 h-4" />
                ) : (
                  <Eye className="w-4 h-4" />
                )}
              </button>
            </div>

            <div className="flex items-start gap-2 mt-3 text-xs text-gray-500">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
              <p>
                API 키는 브라우저에만 저장되며 서버로 전송되지 않습니다.
                현재 데모 모드로 실행 중입니다.
              </p>
            </div>
          </div>
        </div>

        {/* Chat Panel */}
        <div className="lg:col-span-2 glass-card p-5 flex flex-col h-[600px]">
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: `${currentModel?.color}20` }}
              >
                <span
                  className="font-bold"
                  style={{ color: currentModel?.color }}
                >
                  {currentModel?.name.charAt(0)}
                </span>
              </div>
              <div>
                <div className="text-white font-semibold">
                  {currentModel?.name}
                </div>
                <div className="text-xs text-gray-500">
                  {apiKeys[selectedModel] ? '🟢 연결됨' : '🟡 데모 모드'}
                </div>
              </div>
            </div>
            {messages.length > 0 && (
              <button
                onClick={handleClear}
                className="p-2 rounded-lg text-gray-400 hover:text-red-400 hover:bg-red-400/10 transition-colors"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto py-4 space-y-4">
            {messages.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <div className="w-16 h-16 rounded-2xl bg-navy-700/50 flex items-center justify-center mb-4">
                  <Play className="w-8 h-8 text-gray-500" />
                </div>
                <h4 className="text-white font-medium mb-2">
                  대화를 시작하세요
                </h4>
                <p className="text-sm text-gray-500 max-w-sm">
                  아래 입력창에 질문을 입력하고 {currentModel?.name}의 응답을
                  확인해보세요.
                </p>
              </div>
            ) : (
              messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${
                    message.role === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  <div
                    className={`max-w-[80%] p-4 rounded-2xl ${
                      message.role === 'user'
                        ? 'bg-neon-blue/20 text-white'
                        : 'bg-navy-700/50 text-gray-300'
                    }`}
                  >
                    <div className="text-sm leading-relaxed">
                      {formatMessage(message.content)}
                    </div>
                    {message.role === 'assistant' && (
                      <button
                        onClick={() => handleCopy(message.content, index)}
                        className="mt-2 flex items-center gap-1 text-xs text-gray-500 hover:text-white transition-colors"
                      >
                        {copiedIndex === index ? (
                          <>
                            <Check className="w-3 h-3 text-neon-green" />
                            복사됨
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            복사
                          </>
                        )}
                      </button>
                    )}
                  </div>
                </div>
              ))
            )}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-navy-700/50 p-4 rounded-2xl">
                  <Loader2 className="w-5 h-5 text-gray-400 animate-spin" />
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="pt-4 border-t border-white/10">
            <div className="flex gap-3">
              <input
                type="text"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && handleSubmit()}
                placeholder="메시지를 입력하세요..."
                className="flex-1 px-4 py-3 bg-navy-700/50 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-neon-blue/50"
                disabled={isLoading}
              />
              <button
                onClick={handleSubmit}
                disabled={isLoading || !prompt.trim()}
                className="px-5 py-3 bg-neon-blue text-navy-900 font-semibold rounded-xl hover:bg-neon-blue/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                {isLoading ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <Play className="w-5 h-5" />
                )}
                전송
              </button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

