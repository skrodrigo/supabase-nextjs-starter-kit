import { Badge } from "@/components/ui/badge";
import { Star } from 'lucide-react'

export function Testimonials() {
  const testimonials = [
    {
      name: "Ana Silva",
      role: "CTO da TechInova",
      source: "LinkedIn",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3",
      icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/linkedin.svg",
      content: "Este boilerplate acelerou significativamente nosso ",
      highlight: "desenvolvimento de produto",
      ending: ". A estrutura nos permitiu focar nas funcionalidades únicas!"
    },
    {
      name: "Carlos Mendes",
      role: "Líder de Projeto na WebSolutions",
      source: "GitHub",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3",
      icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/github.svg",
      content: "A integração de autenticação e dashboard economizou ",
      highlight: "semanas de desenvolvimento",
      ending: ". Personalizar para nossa marca foi muito fácil."
    },
    {
      name: "Luana Costa",
      role: "Fundadora da QuickStart",
      source: "Twitter",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3",
      icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/twitter.svg",
      content: "Como startup, tempo é crucial. Este boilerplate nos deu uma ",
      highlight: "vantagem competitiva",
      ending: ". Lançamos nosso MVP muito mais rápido!"
    },
    {
      name: "Mariana Oliveira",
      role: "Desenvolvedora Full Stack",
      source: "GitHub",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3",
      icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/github.svg",
      content: "A estrutura modular deste boilerplate é ",
      highlight: "incrivelmente flexível",
      ending: ". Consegui adaptar para diferentes projetos com facilidade."
    },
    {
      name: "Gabriel Souza",
      role: "Engenheiro de Software",
      source: "LinkedIn",
      image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3",
      icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/linkedin.svg",
      content: "Este boilerplate oferece as melhores práticas para ",
      highlight: "desenvolvimento moderno",
      ending: ". É uma base sólida para qualquer aplicação web."
    },
    {
      name: "Beatriz Lima",
      role: "Designer de Produto",
      source: "Dribbble",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3",
      icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/dribbble.svg",
      content: "Adorei a consistência visual dos componentes. Isso facilita muito o ",
      highlight: "trabalho de design",
      ending: ". A UI é limpa e moderna."
    },
    {
      name: "Rafael Almeida",
      role: "CEO da Innovatech",
      source: "Twitter",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3",
      icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/twitter.svg",
      content: "Implementar este boilerplate foi um ",
      highlight: "divisor de águas",
      ending: ". Nossa equipe conseguiu entregar projetos mais rapidamente."
    },
    {
      name: "Carla Rodrigues",
      role: "Gerente de Projetos",
      source: "LinkedIn",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3",
      icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/linkedin.svg",
      content: "A documentação clara e os exemplos práticos tornaram a adoção deste boilerplate ",
      highlight: "muito simples",
      ending: ". Reduzimos bastante o tempo de onboarding."
    },
    {
      name: "Thiago Ferreira",
      role: "Arquiteto de Soluções",
      source: "GitHub",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3",
      icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/github.svg",
      content: "A arquitetura deste boilerplate é extremamente ",
      highlight: "bem pensada",
      ending: ". Facilita a escalabilidade de aplicações complexas."
    }
  ];

  return (
    <section className="relative overflow-hidden py-10">
      <div className="absolute inset-0 opacity-50"></div>
      <div className="mx-auto px-4 max-w-screen-xl relative">
        <div className="flex justify-center mb-8">
          <Badge variant="secondary" className="mb-2 border border-zinc-200">
            Depoimentos
          </Badge>
        </div>

        <div className="text-center space-y-4 mb-12">
          <h2 className="text-balance text-3xl font-semibold md:text-4xl">Depoimentos</h2>
          <p className="text-muted-foreground">Veja como nosso boilerplate está transformando projetos</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="relative md:h-[600px] h-[1200px] overflow-hidden block">
            <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-background to-transparent z-10"></div>
            <div className="flex flex-col gap-8 animate-marquee-down">
              {[
                ...testimonials.slice(0, 6),
                ...testimonials.slice(0, 6)
              ].map((testimonial, index) => (
                <div key={index} className="border bg-muted/50 p-6 rounded-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="relative">
                      <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover border border-muted-foreground/20" />
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-background border border-muted-foreground/20 flex items-center justify-center">
                        <img src={testimonial.icon} alt={testimonial.source} className="w-3 h-3" style={{ filter: 'grayscale(100%)' }} />
                      </div>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-3">
                    {testimonial.content}
                    <span className="text-foreground font-medium">
                      {testimonial.highlight}
                    </span>
                    {testimonial.ending}
                  </p>
                  <div className="flex items-center gap-1">
                    {Array(5).fill(null).map((_, i) => (
                      <Star key={i} className="w-3 h-3 text-foreground" fill="currentColor" />
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10"></div>
          </div>
          <div className="relative h-[600px] overflow-hidden hidden md:block">
            <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-background to-transparent z-10"></div>
            <div className="flex flex-col gap-8 animate-marquee-up">
              {[
                ...testimonials.slice(3, 6),
                ...testimonials.slice(3, 6)
              ].map((testimonial, index) => (
                <div key={index} className="border bg-muted/50 p-6 rounded-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="relative">
                      <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover border border-muted-foreground/20" />
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-background border border-muted-foreground/20 flex items-center justify-center">
                        <img src={testimonial.icon} alt={testimonial.source} className="w-3 h-3" style={{ filter: 'grayscale(100%)' }} />
                      </div>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-3">
                    {testimonial.content}
                    <span className="text-foreground font-medium">
                      {testimonial.highlight}
                    </span>
                    {testimonial.ending}
                  </p>
                  <div className="flex items-center gap-1">
                    {Array(5).fill(null).map((_, i) => (
                      <Star key={i} className="w-3 h-3 text-foreground" fill="currentColor" />
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10"></div>
          </div>
          <div className="relative h-[600px] overflow-hidden hidden lg:block">
            <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-background to-transparent z-10"></div>
            <div className="flex flex-col gap-8 animate-marquee-down">
              {[
                ...testimonials.slice(6, 9),
                ...testimonials.slice(6, 9)
              ].map((testimonial, index) => (
                <div key={index} className="border bg-muted/50 p-6 rounded-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="relative">
                      <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover border border-muted-foreground/20" />
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-background border border-muted-foreground/20 flex items-center justify-center">
                        <img src={testimonial.icon} alt={testimonial.source} className="w-3 h-3" style={{ filter: 'grayscale(100%)' }} />
                      </div>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-3">
                    {testimonial.content}
                    <span className="text-foreground font-medium">
                      {testimonial.highlight}
                    </span>
                    {testimonial.ending}
                  </p>
                  <div className="flex items-center gap-1">
                    {Array(5).fill(null).map((_, i) => (
                      <Star key={i} className="w-3 h-3 text-foreground" fill="currentColor" />
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
