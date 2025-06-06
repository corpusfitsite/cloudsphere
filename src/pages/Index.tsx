
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, X, Globe, Zap, Settings, MessageCircle, ShoppingCart, CreditCard, BarChart3 } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useState } from "react";

const Index = () => {
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Enviando...");

    emailjs.sendForm(
      "service_ciiu0yl", 
      "template_qe2cxe8",
      e.target,
      "lCPs6kyFbYvuP2izs" 
    )
    .then(() => {
      setStatus("✅ Mensagem enviada com sucesso!");
      e.target.reset();
    })
    .catch(() => {
      setStatus("❌ Erro ao enviar. Tente novamente.");
    });
  };

  const plans = [
  {
    name: "Site Express",
    description: "Básico (3 pág.)",
    originalPrice: "R$600",
    price: "R$397",
    discountPercent: "-33,8%",
    monthly: "Grátis",
    promoNote: "💥 Promoção exclusiva por tempo limitado!",
    features: [
      { name: "Tipo de site", value: "Básico (3 pág.)", included: true },
      { name: "Velocidade de carregamento", value: "Lenta (free)", included: false },
      { name: "Domínio Personalizado", value: ".com.br grátis 1 ano", included: true },
      { name: "Manutenção Mensal", value: "Não inclusa", included: false },
      { name: "Futuras alterações", value: "Valor padrão", included: false },
      { name: "Chatbot AI Integrado", value: "Não", included: false },
      { name: "Carrinho de compras", value: "Não", included: false },
      { name: "Pagamentos e frete", value: "Não", included: false },
      { name: "Painel de pedidos e estoque", value: "Não", included: false }
    ]
  },
  {
    name: "Combo Essencial",
    badge: "🔥",
    description: "Até 6 pág.",
    originalPrice: "R$800",
    price: "R$649",
    discountPercent: "-18,9%",
    monthly: "R$149/mês",
    promoNote: "🎉 📅 Promoção válida até 30 de junho de 2025 ou enquanto durarem os estoques.",
    features: [
      { name: "Tipo de site", value: "Até 6 pág.", included: true },
      { name: "Velocidade de carregamento", value: "Rápida", included: true },
      { name: "Domínio Personalizado", value: ".com.br grátis 1 ano", included: true },
      { name: "Manutenção Mensal", value: "Inclusa", included: true },
      { name: "Futuras alterações", value: "Valor padrão", included: false },
      { name: "Chatbot AI Integrado", value: "Não", included: false },
      { name: "Carrinho de compras", value: "Não", included: false },
      { name: "Pagamentos e frete", value: "Não", included: false },
      { name: "Painel de pedidos e estoque", value: "Não", included: false }
    ]
  },
  {
    name: "Combo Premium",
    badge: "⭐",
    description: "Até 10 pág.",
    originalPrice: "R$950",
    price: "R$797",
    discountPercent: "-16,1%",
    monthly: "R$189/mês",
    promoNote: "🎉 📅 Promoção válida até 30 de junho de 2025 ou enquanto durarem os estoques.",
    features: [
      { name: "Tipo de site", value: "Até 10 pág.", included: true },
      { name: "Velocidade de carregamento", value: "Rápida", included: true },
      { name: "Domínio Personalizado", value: ".com.br grátis 1 ano", included: true },
      { name: "Manutenção Mensal", value: "Inclusa", included: true },
      { name: "Futuras alterações", value: "Camarada", included: true },
      { name: "Chatbot AI Integrado", value: "Não", included: false },
      { name: "Carrinho de compras", value: "Não", included: false },
      { name: "Pagamentos e frete", value: "Não", included: false },
      { name: "Painel de pedidos e estoque", value: "Não", included: false }
    ]
  },
  {
    name: "Max AI",
    emoji: "🤖",
    badge: "💡",
    description: "Ilimitado",
    originalPrice: "R$1.200",
    price: "R$997",
    discountPercent: "-16,9%",
    monthly: "R$229/mês",
    promoNote: "🎉 📅 Promoção válida até 30 de junho de 2025 ou enquanto durarem os estoques.",
    features: [
      { name: "Tipo de site", value: "Ilimitado", included: true },
      { name: "Velocidade de carregamento", value: "Rápida", included: true },
      { name: "Domínio Personalizado", value: "Incluso", included: true },
      { name: "Manutenção Mensal", value: "Inclusa", included: true },
      { name: "Futuras alterações", value: "Camarada", included: true },
      { name: "Chatbot AI Integrado", value: "Incluso", included: true },
      { name: "Carrinho de compras", value: "Não", included: false },
      { name: "Pagamentos e frete", value: "Não", included: false },
      { name: "Painel de pedidos e estoque", value: "Não", included: false }
    ]
  },
  {
    name: "Loja Virtual PRO",
    emoji: "🛍️",
    description: "Loja virtual completa",
    originalPrice: "R$1.800",
    price: "R$1497",
    discountPercent: "-16,8%",
    monthly: "R$229/mês",
    promoNote: "🎉 📅 Promoção válida até 30 de junho de 2025 ou enquanto durarem os estoques.",
    features: [
      { name: "Tipo de site", value: "Loja virtual completa", included: true },
      { name: "Velocidade de carregamento", value: "Rápida", included: true },
      { name: "Domínio Personalizado", value: ".com.br grátis 1 ano", included: true },
      { name: "Manutenção Mensal", value: "Inclusa", included: true },
      { name: "Futuras alterações", value: "Camarada", included: true },
      { name: "Chatbot AI Integrado", value: "Opcional ($)", included: true },
      { name: "Carrinho de compras", value: "Incluso", included: true },
      { name: "Pagamentos e frete", value: "Integrado", included: true },
      { name: "Painel de pedidos e estoque", value: "Incluso", included: true }
    ]
  }
];


const projetos = [
  {
    nome: "Site da Academia CorpusFit",
    plano: "Premium",
    emoji: "",
    descricao: "Site institucional com login de alunos, mapa interativo e agenda de treinos.",
    imagem: "/projetos/corpusfit.png", 
    link: "https://corpusfit.site",
  },
  {
    nome: "Landing Page TH Eletrica",
    plano: "Site Express",
    emoji: "",
    descricao: "Landing Page para divulgação de serviços de eletrica com formulario para contato",
    imagem: "/projetos/theletrica.png", 
    link: "https://theos-electric-spark.vercel.app",
  },
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
           <a href="#formulario">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Contato
              </Button>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            Criação de Sites
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
             CloudSphere
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
                    {plan.originalPrice && (
                      <div className="text-sm text-gray-500 line-through">
                        {plan.originalPrice}
                      </div>
                    )}
                    <div className="text-3xl font-bold text-green-600">{plan.price}</div>

                    {plan.discountPercent && (
                      <div className="text-sm text-red-500 font-semibold">
                        {plan.discountPercent} OFF
                      </div>
                    )}

                    <div className="text-sm text-gray-600 mt-1">{plan.monthly}</div>
                    <div className="text-xs text-gray-500">mensalidade</div>

                    {plan.promoNote && (
                      <div className="mt-2 text-xs text-yellow-600 font-medium italic">
                        {plan.promoNote}
                      </div>
                    )}
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

       {/* Projetos Recentes */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Projetos Realizados
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projetos.map((projeto, index) => (
              <Card key={index} className="shadow-md hover:shadow-xl transition-all">
                <a href={projeto.link} target="_blank" rel="noopener noreferrer">
                  <img src={projeto.imagem} alt={projeto.nome} className="w-full h-48 object-cover rounded-t-md" />
                </a>
                <CardContent className="p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-lg font-bold text-gray-800">{projeto.nome}</h3>
                    <span className="text-xl">{projeto.emoji}</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{projeto.descricao}</p>
                  <Badge className="bg-blue-100 text-blue-600">Plano: {projeto.plano}</Badge>
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
          <a href="#formulario">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
              Falar com Especialista
            </Button>
          </a>
        </div>
      </section>

      {/* Formulário de Contato */}
      <section id="formulario" className="py-20 px-4 bg-white">
        <div className="container max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Formulário de Contato</h2>
          <form onSubmit={sendEmail} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Nome</label>
              <input
                type="text"
                name="nome"
                className="w-full mt-1 p-3 border border-gray-300 rounded-lg"
                placeholder="Seu nome completo"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                className="w-full mt-1 p-3 border border-gray-300 rounded-lg"
                placeholder="seu@email.com"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">WhatsApp</label>
              <input
                type="tel"
                name="telefone"
                className="w-full mt-1 p-3 border border-gray-300 rounded-lg"
                placeholder="(99) 99999-9999"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Mensagem</label>
              <textarea
                name="mensagem"
                className="w-full mt-1 p-3 border border-gray-300 rounded-lg"
                rows={4}
                placeholder="Conte como podemos te ajudar"
                required
              ></textarea>
            </div>
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700"
            >
              Enviar Mensagem
            </Button>
            <p className="text-sm text-center mt-2 text-gray-600">{status}</p>
          </form>
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
