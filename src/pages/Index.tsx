
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, X, Globe, Zap, Settings, MessageCircle, ShoppingCart, CreditCard, BarChart3 } from "lucide-react";

const Index = () => {
  const plans = [
    {
      name: "Site Express",
      emoji: "🍟",
      description: "Básico (3 pág.)",
      price: "R$500",
      monthly: "Grátis",
      features: [
        { name: "Tipo de site", value: "Básico (3 pág.)", included: true },
        { name: "Velocidade de carregamento", value: "Lenta (free)", included: false },
        { name: "Domínio Personalizado", value: "Não incluso", included: false },
        { name: "Manutenção Mensal", value: "Não inclusa", included: false },
        { name: "Futuras alterações", value: "Valor padrão", included: false },
        { name: "Chatbot AI Integrado", value: "Não", included: false },
        { name: "Carrinho de compras", value: "Não", included: false },
        { name: "Pagamentos e frete", value: "Não", included: false },
        { name: "Painel de pedidos e estoque", value: "Não", included: false },
      ]
    },
    {
      name: "Essencial",
      emoji: "🍔",
      badge: "🔥",
      description: "Até 6 pág.",
      price: "R$800",
      monthly: "R$149/mês",
      features: [
        { name: "Tipo de site", value: "Até 6 pág.", included: true },
        { name: "Velocidade de carregamento", value: "Rápida", included: true },
        { name: "Domínio Personalizado", value: "Incluso", included: true },
        { name: "Manutenção Mensal", value: "Inclusa", included: true },
        { name: "Futuras alterações", value: "Valor padrão", included: false },
        { name: "Chatbot AI Integrado", value: "Não", included: false },
        { name: "Carrinho de compras", value: "Não", included: false },
        { name: "Pagamentos e frete", value: "Não", included: false },
        { name: "Painel de pedidos e estoque", value: "Não", included: false },
      ]
    },
    {
      name: "Premium",
      emoji: "🍔🍟",
      badge: "⭐",
      description: "Até 10 pág.",
      price: "R$950",
      monthly: "R$189/mês",
      features: [
        { name: "Tipo de site", value: "Até 10 pág.", included: true },
        { name: "Velocidade de carregamento", value: "Rápida", included: true },
        { name: "Domínio Personalizado", value: "Incluso", included: true },
        { name: "Manutenção Mensal", value: "Inclusa", included: true },
        { name: "Futuras alterações", value: "Camarada", included: true },
        { name: "Chatbot AI Integrado", value: "Não", included: false },
        { name: "Carrinho de compras", value: "Não", included: false },
        { name: "Pagamentos e frete", value: "Não", included: false },
        { name: "Painel de pedidos e estoque", value: "Não", included: false },
      ]
    },
    {
      name: "Max AI",
      emoji: "🍔🍟🥤",
      badge: "🤖",
      description: "Ilimitado",
      price: "R$1.200",
      monthly: "R$229/mês",
      features: [
        { name: "Tipo de site", value: "Ilimitado", included: true },
        { name: "Velocidade de carregamento", value: "Rápida", included: true },
        { name: "Domínio Personalizado", value: "Incluso", included: true },
        { name: "Manutenção Mensal", value: "Inclusa", included: true },
        { name: "Futuras alterações", value: "Camarada", included: true },
        { name: "Chatbot AI Integrado", value: "Incluso", included: true },
        { name: "Carrinho de compras", value: "Não", included: false },
        { name: "Pagamentos e frete", value: "Não", included: false },
        { name: "Painel de pedidos e estoque", value: "Não", included: false },
      ]
    },
    {
      name: "Loja Digital PRO",
      emoji: "🛍️",
      description: "Loja virtual completa",
      price: "R$1.800",
      monthly: "R$259/mês",
      features: [
        { name: "Tipo de site", value: "Loja virtual completa", included: true },
        { name: "Velocidade de carregamento", value: "Rápida", included: true },
        { name: "Domínio Personalizado", value: "Incluso", included: true },
        { name: "Manutenção Mensal", value: "Inclusa", included: true },
        { name: "Futuras alterações", value: "Camarada", included: true },
        { name: "Chatbot AI Integrado", value: "Opcional ($)", included: true },
        { name: "Carrinho de compras", value: "Incluso", included: true },
        { name: "Pagamentos e frete", value: "Integrado", included: true },
        { name: "Painel de pedidos e estoque", value: "Incluso", included: true },
      ]
    }
  ];

  const getIcon = (featureName: string) => {
    switch (featureName) {
      case "Tipo de site": return <Globe className="w-4 h-4" />;
      case "Velocidade de carregamento": return <Zap className="w-4 h-4" />;
      case "Domínio Personalizado": return <Globe className="w-4 h-4" />;
      case "Manutenção Mensal": return <Settings className="w-4 h-4" />;
      case "Chatbot AI Integrado": return <MessageCircle className="w-4 h-4" />;
      case "Carrinho de compras": return <ShoppingCart className="w-4 h-4" />;
      case "Pagamentos e frete": return <CreditCard className="w-4 h-4" />;
      case "Painel de pedidos e estoque": return <BarChart3 className="w-4 h-4" />;
      default: return <Settings className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">CS</span>
              </div>
              <span className="text-xl font-bold text-gray-800">CloudSphere</span>
            </div>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              Contato
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            Criação de Sites
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
              Thundertale
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Escolha o plano perfeito para sua presença digital. Do básico ao e-commerce completo.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Badge variant="secondary" className="text-sm px-4 py-2">
              🚀 Deploy Rápido
            </Badge>
            <Badge variant="secondary" className="text-sm px-4 py-2">
              🎨 Design Responsivo
            </Badge>
            <Badge variant="secondary" className="text-sm px-4 py-2">
              🔧 Manutenção Inclusa
            </Badge>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Comparativo de Planos
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {plans.map((plan, index) => (
              <Card key={index} className={`relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105 ${
                plan.name === "Premium" ? "ring-2 ring-purple-500 shadow-lg" : ""
              }`}>
                {plan.badge && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-gradient-to-r from-purple-500 to-pink-500">
                      {plan.badge}
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <div className="text-4xl mb-2">{plan.emoji}</div>
                  <CardTitle className="text-xl font-bold">{plan.name}</CardTitle>
                  <CardDescription className="text-sm">{plan.description}</CardDescription>
                  
                  <div className="mt-4">
                    <div className="text-3xl font-bold text-gray-800">{plan.price}</div>
                    <div className="text-sm text-gray-600">valor inicial</div>
                    <div className="text-lg font-semibold text-blue-600 mt-2">{plan.monthly}</div>
                    <div className="text-xs text-gray-500">mensalidade</div>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-2 text-sm">
                        <div className="flex-shrink-0 mt-0.5">
                          {feature.included ? (
                            <Check className="w-4 h-4 text-green-500" />
                          ) : (
                            <X className="w-4 h-4 text-red-500" />
                          )}
                        </div>
                        <div className="flex items-center space-x-2 flex-1">
                          {getIcon(feature.name)}
                          <div>
                            <div className="font-medium text-gray-700">{feature.name}</div>
                            <div className={`text-xs ${feature.included ? 'text-green-600' : 'text-gray-500'}`}>
                              {feature.value}
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full mt-6 ${
                      plan.name === "Premium" 
                        ? "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700" 
                        : "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    }`}
                  >
                    Escolher {plan.name}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Pronto para começar seu projeto?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e vamos criar o site dos seus sonhos juntos.
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
            Falar com Especialista
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">CS</span>
            </div>
            <span className="text-xl font-bold">CloudSphere</span>
          </div>
          <p className="text-gray-400 mb-4">
            Criando experiências digitais incríveis desde 2024
          </p>
          <div className="text-sm text-gray-500">
            © 2024 CloudSphere. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
