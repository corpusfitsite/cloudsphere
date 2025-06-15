
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, X, Globe, Zap, Settings, MessageCircle, ShoppingCart, CreditCard, BarChart3, HelpCircle, Moon, Sun } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { useInView } from "@/hooks/use-in-view";
import { useTheme } from "@/contexts/ThemeContext";

const Index = () => {
  const [status, setStatus] = useState("");
  const { theme, toggleTheme } = useTheme();
  
  // Refs para animações
  const [heroRef, heroInView] = useInView();
  const [plansRef, plansInView] = useInView();
  const [aboutRef, aboutInView] = useInView();
  const [testimonialsRef, testimonialsInView] = useInView();
  const [faqRef, faqInView] = useInView();
  const [statsRef, statsInView] = useInView();

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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      {/* Header */}
      <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50 transition-colors duration-300">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">CS</span>
              </div>
              <span className="text-xl font-bold text-gray-800 dark:text-white">CloudSphere</span>
            </div>
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white"
              >
                {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
              </Button>
              <a href="#formulario">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  Contato
                </Button>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section ref={heroRef} className="py-20 px-4">
        <div className={`container mx-auto text-center transition-all duration-1000 ${
          heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 dark:text-white mb-6">
            Criação de Sites
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
             CloudSphere
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
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
      <section ref={plansRef} className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className={`text-3xl font-bold text-center text-gray-800 dark:text-white mb-12 transition-all duration-1000 ${
            plansInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Comparativo de Planos
          </h2>
          
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 transition-all duration-1000 delay-300 ${
            plansInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
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

      {/* Sobre Nós */}
      <section ref={aboutRef} className="py-20 px-4 bg-gradient-to-br from-purple-50 via-white to-blue-50">
        <div className="container mx-auto">
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-1000 ${
            aboutInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {/* Conteúdo */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Sobre a <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">CloudSphere</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Somos uma agência digital especializada em criar experiências web excepcionais. Desde 2021, ajudamos empresas de todos os tamanhos a estabelecer uma presença digital forte e eficaz.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Nossa missão é democratizar o acesso a sites profissionais, oferecendo soluções tecnológicas avançadas com preços justos e atendimento humanizado.
              </p>
              
              {/* Valores */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Inovação</h4>
                    <p className="text-sm text-gray-600">Sempre utilizamos as tecnologias mais modernas do mercado</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Settings className="w-4 h-4 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Qualidade</h4>
                    <p className="text-sm text-gray-600">Cada projeto é tratado com máxima atenção aos detalhes</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Suporte</h4>
                    <p className="text-sm text-gray-600">Atendimento personalizado e suporte contínuo</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Globe className="w-4 h-4 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Resultados</h4>
                    <p className="text-sm text-gray-600">Focamos em gerar resultados reais para seu negócio</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Imagem/Visual */}
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Nossa Equipe</h3>
                
                {/* Membros da equipe */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="font-bold">CS</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Joao Sarruf</h4>
                      <p className="text-sm opacity-90">Desenvolvedor Full-Stack</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="font-bold">MO</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Paulo Cordeiro</h4>
                      <p className="text-sm opacity-90">UX/UI Designer</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="font-bold">RS</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Theobaldo Alves</h4>
                      <p className="text-sm opacity-90">Especialista em SEO</p>
                    </div>
                  </div>
                </div>

                {/* Estatísticas da equipe */}
                <div className="mt-8 pt-6 border-t border-white/20">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold">5+</div>
                      <div className="text-sm opacity-90">Anos de Experiência</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold">15+</div>
                      <div className="text-sm opacity-90">Tecnologias Dominadas</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Elementos decorativos */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-full opacity-20"></div>
            </div>
          </div>

          {/* Processo de Trabalho */}
          <div className="mt-20">
            <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-12">
              Nosso Processo de Trabalho
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Etapa 1 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  1
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Análise</h4>
                <p className="text-sm text-gray-600">Entendemos seu negócio e objetivos para criar a estratégia perfeita</p>
              </div>
              
              {/* Etapa 2 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  2
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Design</h4>
                <p className="text-sm text-gray-600">Criamos layouts únicos e responsivos focados na experiência do usuário</p>
              </div>
              
              {/* Etapa 3 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  3
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Desenvolvimento</h4>
                <p className="text-sm text-gray-600">Codificamos com as melhores práticas e tecnologias modernas</p>
              </div>
              
              {/* Etapa 4 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  4
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Entrega</h4>
                <p className="text-sm text-gray-600">Lançamos seu site e oferecemos suporte contínuo para seu sucesso</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos/Testimonials */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Mais de 50 projetos entregues com excelência. Veja os depoimentos de quem confia no nosso trabalho.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Depoimento 1 */}
            <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-0">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-lg">⭐</span>
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-6 italic">
                  "A CloudSphere transformou completamente nossa presença digital. O site ficou incrível e nossos alunos adoraram as novas funcionalidades. Recomendo muito!"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    MR
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Marcos Roberto</h4>
                    <p className="text-sm text-gray-600">Diretor - Academia CorpusFit</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Depoimento 2 */}
            <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-0">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-lg">⭐</span>
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-6 italic">
                  "Profissionalismo e qualidade excepcionais. O site da TH Elétrica ficou exatamente como imaginávamos. Aumentamos nossos leads em 300%!"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    TH
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Thiago Henrique</h4>
                    <p className="text-sm text-gray-600">Proprietário - TH Elétrica</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Depoimento 3 */}
            <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-0">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-lg">⭐</span>
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-6 italic">
                  "Equipe muito competente e atenciosa. Entregaram nosso e-commerce no prazo e com todas as funcionalidades que precisávamos. Vendas triplicaram!"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    AS
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Ana Silva</h4>
                    <p className="text-sm text-gray-600">CEO - Loja Virtual Fashion</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Depoimento 4 */}
            <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-0">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-lg">⭐</span>
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-6 italic">
                  "Suporte excepcional e site super rápido. O chatbot AI que implementaram revolucionou nosso atendimento. Clientes muito mais satisfeitos!"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    RC
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Roberto Costa</h4>
                    <p className="text-sm text-gray-600">Gerente - Consultoria Tech</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Depoimento 5 */}
            <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-0">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-lg">⭐</span>
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-6 italic">
                  "Design moderno e funcionalidades incríveis. Nossa clínica agora tem um sistema de agendamento online que facilitou muito nossa rotina."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-green-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    LM
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Dra. Lucia Martins</h4>
                    <p className="text-sm text-gray-600">Diretora - Clínica Saúde+</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Depoimento 6 */}
            <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-0">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-lg">⭐</span>
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-6 italic">
                  "Investimento que valeu cada centavo. Site responsivo, rápido e com SEO otimizado. Aparecemos na primeira página do Google em 2 meses!"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    PS
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Pedro Santos</h4>
                    <p className="text-sm text-gray-600">Sócio - Restaurante Sabor & Arte</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Estatísticas */}
          <div ref={statsRef} className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 transition-all duration-1000 delay-500 ${
            statsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">Projetos Entregues</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">98%</div>
              <div className="text-gray-600">Satisfação</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">24h</div>
              <div className="text-gray-600">Suporte</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">3 Anos</div>
              <div className="text-gray-600">No Mercado</div>
            </div>
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

      {/* FAQ Section */}
      <section ref={faqRef} className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className={`text-center mb-12 transition-all duration-1000 ${
            faqInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <HelpCircle className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tire suas dúvidas sobre nossos serviços e processo de trabalho
            </p>
          </div>

          <div className={`transition-all duration-1000 delay-300 ${
            faqInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold text-gray-800 hover:text-blue-600">
                Quanto tempo leva para criar um site?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pt-2">
                O prazo varia conforme a complexidade do projeto. Sites básicos (3 páginas) ficam prontos em 5-7 dias úteis, 
                sites premium (até 10 páginas) em 10-15 dias úteis, e e-commerces completos em 15-20 dias úteis. 
                Sempre mantemos você informado sobre o progresso do seu projeto.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold text-gray-800 hover:text-blue-600">
                O que está incluído na manutenção mensal?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pt-2">
                A manutenção inclui: atualizações de segurança, backup automático, monitoramento de uptime, 
                correção de bugs, atualizações de conteúdo (textos e imagens), suporte técnico via WhatsApp, 
                relatórios mensais de performance e pequenas alterações no layout quando necessário.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold text-gray-800 hover:text-blue-600">
                Posso fazer alterações no site depois de pronto?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pt-2">
                Sim! Nos planos Premium e superiores, pequenas alterações estão incluídas na manutenção mensal. 
                Para mudanças maiores, oferecemos valores especiais para clientes. No plano Site Express, 
                alterações são cobradas à parte com valores justos e transparentes.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold text-gray-800 hover:text-blue-600">
                O site será responsivo (funciona no celular)?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pt-2">
                Absolutamente! Todos os nossos sites são desenvolvidos com design responsivo, 
                garantindo perfeita visualização e funcionamento em smartphones, tablets e desktops. 
                Testamos em diversos dispositivos antes da entrega.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold text-gray-800 hover:text-blue-600">
                Vocês fazem SEO (otimização para Google)?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pt-2">
                Sim! Todos os sites incluem SEO básico: otimização de velocidade, meta tags, 
                estrutura semântica, sitemap XML e integração com Google Analytics. 
                Para SEO avançado (link building, conteúdo otimizado), oferecemos pacotes específicos.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold text-gray-800 hover:text-blue-600">
                Como funciona o pagamento?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pt-2">
                O pagamento do desenvolvimento é feito em duas parcelas: 50% para iniciar o projeto e 50% na entrega. 
                Aceitamos PIX, cartão de crédito e boleto. A mensalidade de manutenção é cobrada mensalmente 
                via PIX ou cartão de crédito, sempre no mesmo dia do mês.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold text-gray-800 hover:text-blue-600">
                Preciso fornecer textos e imagens?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pt-2">
                Idealmente sim, pois você conhece melhor seu negócio. Mas se precisar de ajuda, 
                oferecemos suporte na criação de textos e temos acesso a bancos de imagens profissionais. 
                Também podemos fazer sessão de fotos do seu estabelecimento (consulte valores).
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold text-gray-800 hover:text-blue-600">
                O chatbot AI realmente funciona bem?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pt-2">
                Sim! Nosso chatbot é treinado especificamente para seu negócio, respondendo perguntas frequentes, 
                qualificando leads e direcionando para atendimento humano quando necessário. 
                Ele aprende continuamente e pode ser integrado ao WhatsApp Business.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-9" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold text-gray-800 hover:text-blue-600">
                Posso cancelar a manutenção a qualquer momento?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pt-2">
                Sim, não há fidelidade. Você pode cancelar a manutenção a qualquer momento com 30 dias de antecedência. 
                Porém, recomendamos manter para garantir segurança, backups e funcionamento otimizado do seu site. 
                Sem manutenção, não podemos garantir suporte técnico.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-10" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold text-gray-800 hover:text-blue-600">
                Vocês oferecem garantia?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pt-2">
                Sim! Oferecemos 30 dias de garantia total após a entrega para correção de qualquer problema técnico. 
                Além disso, todos os clientes com manutenção ativa têm suporte técnico ilimitado e 
                correção de bugs sem custo adicional.
              </AccordionContent>
            </AccordionItem>            </Accordion>

            {/* CTA do FAQ */}
            <div className="text-center mt-12">
              <p className="text-gray-600 mb-6">Não encontrou sua dúvida?</p>
              <a href="#formulario">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  Fale Conosco
                </Button>
              </a>
            </div>
          </div>
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
            Criando experiências digitais incríveis desde 2022
          </p>
          <div className="text-sm text-gray-500">
            © 2022 CloudSphere. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
