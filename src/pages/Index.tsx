import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';

const Index = () => {
  const [date, setDate] = useState<Date>();
  const [guests, setGuests] = useState(1);
  const [selectedTour, setSelectedTour] = useState<any>(null);

  const tours = [
    {
      id: 1,
      title: 'Рыбалка на озере',
      description: 'Трофейная щука и окунь в живописных местах',
      duration: '1 день',
      price: '5 000 ₽',
      image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef',
      category: 'fishing'
    },
    {
      id: 2,
      title: 'Речная рыбалка',
      description: 'Ловля на спиннинг в горных реках',
      duration: '2 дня',
      price: '12 000 ₽',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19',
      category: 'fishing'
    },
    {
      id: 3,
      title: 'Поход в горы',
      description: 'Трекинг с опытным гидом и ночевка в палатках',
      duration: '3 дня',
      price: '18 000 ₽',
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b',
      category: 'tour'
    },
    {
      id: 4,
      title: 'Сплав по реке',
      description: 'Экстремальный рафтинг для любителей приключений',
      duration: '1 день',
      price: '8 000 ₽',
      image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29',
      category: 'tour'
    }
  ];

  const reviews = [
    {
      name: 'Иван Петров',
      text: 'Отличная организация! Поймал трофейную щуку весом 8 кг. Гид профессионал своего дела.',
      rating: 5,
      date: 'Октябрь 2024'
    },
    {
      name: 'Мария Сидорова',
      text: 'Незабываемый поход в горы! Красивейшие виды и отличная компания. Рекомендую всем!',
      rating: 5,
      date: 'Сентябрь 2024'
    },
    {
      name: 'Алексей Кузнецов',
      text: 'Сплав был невероятным! Адреналин зашкаливает, природа восхитительная. Обязательно вернусь.',
      rating: 5,
      date: 'Август 2024'
    }
  ];

  const gallery = [
    'https://images.unsplash.com/photo-1500382017468-9049fed747ef',
    'https://images.unsplash.com/photo-1559827260-dc66d52bef19',
    'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b',
    'https://images.unsplash.com/photo-1501594907352-04cda38ebc29',
    'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d',
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4'
  ];

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleBooking = (tour: any) => {
    setSelectedTour(tour);
  };

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Fish" className="text-primary" size={32} />
              <span className="text-2xl font-bold text-foreground">РыбТур</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <button onClick={() => scrollToSection('home')} className="hover:text-primary transition-colors">Главная</button>
              <button onClick={() => scrollToSection('tours')} className="hover:text-primary transition-colors">Туры</button>
              <button onClick={() => scrollToSection('gallery')} className="hover:text-primary transition-colors">Галерея</button>
              <button onClick={() => scrollToSection('reviews')} className="hover:text-primary transition-colors">Отзывы</button>
              <button onClick={() => scrollToSection('contacts')} className="hover:text-primary transition-colors">Контакты</button>
            </div>
          </div>
        </nav>
      </header>

      <section id="home" className="relative h-[600px] flex items-center justify-center bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1500382017468-9049fed747ef')] bg-cover bg-center opacity-20" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
            Путешествия и рыбалка
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground">
            Незабываемые приключения на лоне природы
          </p>
          <Button 
            size="lg" 
            onClick={() => scrollToSection('tours')}
            className="text-lg px-8 py-6 hover:scale-105 transition-transform"
          >
            Выбрать тур
            <Icon name="ArrowRight" className="ml-2" size={20} />
          </Button>
        </div>
      </section>

      <section id="tours" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Наши туры</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tours.map((tour) => (
              <Card key={tour.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={tour.image} 
                    alt={tour.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant={tour.category === 'fishing' ? 'default' : 'secondary'}>
                      {tour.category === 'fishing' ? 'Рыбалка' : 'Тур'}
                    </Badge>
                    <span className="text-sm text-muted-foreground flex items-center gap-1">
                      <Icon name="Clock" size={14} />
                      {tour.duration}
                    </span>
                  </div>
                  <CardTitle>{tour.title}</CardTitle>
                  <CardDescription>{tour.description}</CardDescription>
                </CardHeader>
                <CardFooter className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">{tour.price}</span>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button onClick={() => handleBooking(tour)}>
                        Забронировать
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-md">
                      <DialogHeader>
                        <DialogTitle>Бронирование: {tour.title}</DialogTitle>
                        <DialogDescription>
                          Заполните форму, и мы свяжемся с вами для подтверждения
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4 py-4">
                        <div className="space-y-2">
                          <Label>Дата тура</Label>
                          <Popover>
                            <PopoverTrigger asChild>
                              <Button variant="outline" className="w-full justify-start text-left">
                                <Icon name="Calendar" className="mr-2" size={16} />
                                {date ? format(date, 'PPP', { locale: ru }) : 'Выберите дату'}
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0">
                              <Calendar
                                mode="single"
                                selected={date}
                                onSelect={setDate}
                                locale={ru}
                              />
                            </PopoverContent>
                          </Popover>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="guests">Количество человек</Label>
                          <Input
                            id="guests"
                            type="number"
                            min="1"
                            value={guests}
                            onChange={(e) => setGuests(parseInt(e.target.value))}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="name">Ваше имя</Label>
                          <Input id="name" placeholder="Иван Иванов" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Телефон</Label>
                          <Input id="phone" type="tel" placeholder="+7 (999) 123-45-67" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input id="email" type="email" placeholder="ivan@example.com" />
                        </div>
                        <div className="bg-muted p-4 rounded-lg">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm text-muted-foreground">Стоимость тура</span>
                            <span className="font-semibold">{tour.price}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-muted-foreground">Количество человек</span>
                            <span className="font-semibold">{guests}</span>
                          </div>
                        </div>
                        <Button className="w-full" size="lg">
                          Отправить заявку
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Галерея</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {gallery.map((img, index) => (
              <div 
                key={index} 
                className="aspect-video overflow-hidden rounded-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <img 
                  src={img} 
                  alt={`Галерея ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Отзывы</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {reviews.map((review, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-lg">{review.name}</CardTitle>
                    <div className="flex gap-1">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <Icon key={i} name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
                      ))}
                    </div>
                  </div>
                  <CardDescription className="text-xs">{review.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-8">О нас</h2>
          <p className="text-lg text-muted-foreground mb-6">
            Мы организуем туры и рыбалку в самых живописных местах России. Наша команда профессиональных гидов 
            с многолетним опытом обеспечит вам безопасный и незабываемый отдых на природе.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="flex flex-col items-center">
              <div className="bg-primary/10 p-4 rounded-full mb-4">
                <Icon name="Award" size={32} className="text-primary" />
              </div>
              <h3 className="font-bold mb-2">10+ лет опыта</h3>
              <p className="text-sm text-muted-foreground">Профессиональная организация туров</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-secondary/10 p-4 rounded-full mb-4">
                <Icon name="Users" size={32} className="text-secondary" />
              </div>
              <h3 className="font-bold mb-2">5000+ клиентов</h3>
              <p className="text-sm text-muted-foreground">Довольных путешественников</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-accent/10 p-4 rounded-full mb-4">
                <Icon name="MapPin" size={32} className="text-accent" />
              </div>
              <h3 className="font-bold mb-2">50+ маршрутов</h3>
              <p className="text-sm text-muted-foreground">По всей России</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12">Контакты</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Icon name="MapPin" className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Адрес</h3>
                  <p className="text-muted-foreground">г. Москва, ул. Лесная, д. 15</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Icon name="Phone" className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Телефон</h3>
                  <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Icon name="Mail" className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Email</h3>
                  <p className="text-muted-foreground">info@ryb-tur.ru</p>
                </div>
              </div>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Напишите нам</CardTitle>
                <CardDescription>Мы ответим в течение 24 часов</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="contact-name">Имя</Label>
                  <Input id="contact-name" placeholder="Ваше имя" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact-email">Email</Label>
                  <Input id="contact-email" type="email" placeholder="your@email.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Сообщение</Label>
                  <Textarea id="message" placeholder="Ваше сообщение..." rows={4} />
                </div>
                <Button className="w-full">
                  Отправить
                  <Icon name="Send" className="ml-2" size={16} />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-muted/50 py-8 border-t">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Fish" className="text-primary" size={24} />
            <span className="text-xl font-bold">РыбТур</span>
          </div>
          <p className="text-muted-foreground text-sm">
            © 2024 РыбТур. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
