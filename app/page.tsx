import Link from "next/link"
import { ChevronRight, Utensils, Award, Calendar, Gift } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import FeaturedRestaurants from "@/components/featured-restaurants"
import ExclusiveExperiences from "@/components/exclusive-experiences"
import RewardsPreview from "@/components/rewards-preview"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-[500px] bg-white text-black">
        <div
          className="absolute inset-0 bg-cover bg-gradient-to-b from-[#1a1a1a] to-[#ff8000]  opacity-20"
        />
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">OneBite</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            Exclusive access to premium dining experiences and curated recommendations for discerning food enthusiasts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
              Join Premium
            </Button>
            <Button size="lg" variant="outline" className="text-black border-black hover:bg-black/10">
              Explore Free
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">La Experiencia Gastronómica Definitiva</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-white border-none shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <Utensils className="h-10 w-10 text-amber-600 mb-2" />
                <CardTitle>Restaurantes Seleccionados</CardTitle>
                <CardDescription>Locales premium cuidadosamente elegidos</CardDescription>
              </CardHeader>
              <CardFooter>
                <Link href="/restaurants" className="text-amber-600 flex items-center">
                  Descubrir <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </CardFooter>
            </Card>

            <Card className="bg-white border-none shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <Award className="h-10 w-10 text-amber-600 mb-2" />
                <CardTitle>Beneficios Exclusivos</CardTitle>
                <CardDescription>Menús especiales y acceso prioritario</CardDescription>
              </CardHeader>
              <CardFooter>
                <Link href="/benefits" className="text-amber-600 flex items-center">
                  Ver Beneficios <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </CardFooter>
            </Card>

            <Card className="bg-white border-none shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <Calendar className="h-10 w-10 text-amber-600 mb-2" />
                <CardTitle>Experiencias Únicas</CardTitle>
                <CardDescription>Eventos y degustaciones con chefs destacados</CardDescription>
              </CardHeader>
              <CardFooter>
                <Link href="/experiences" className="text-amber-600 flex items-center">
                  Explorar Eventos <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </CardFooter>
            </Card>

            <Card className="bg-white border-none shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <Gift className="h-10 w-10 text-amber-600 mb-2" />
                <CardTitle>Programa de Recompensas</CardTitle>
                <CardDescription>Gana puntos con cada visita</CardDescription>
              </CardHeader>
              <CardFooter>
                <Link href="/rewards/program" className="text-amber-600 flex items-center">
                  Ver Recompensas <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Restaurants */}
      <FeaturedRestaurants />

      {/* Exclusive Experiences */}
      <ExclusiveExperiences />

      {/* Rewards Preview */}
      <RewardsPreview />

      {/* CTA Section */}
      <section className="py-16 bg-amber-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Eleva Tu Experiencia Gastronómica</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Únete a OneBite Premium hoy y desbloquea un mundo de experiencias culinarias exclusivas.
          </p>
          <Link href="/join">
            <Button
              size="lg"
              className="bg-white text-amber-600 hover:bg-neutral-100 font-medium text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all"
            >
              Convertirme en Miembro Premium
            </Button>
          </Link>
        </div>
      </section>

      {/* Interest Form Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">¿Querés ser parte del club gastronómico más exclusivo?</h2>
            <p className="text-lg mb-8">
              Dejanos tu mail y te enviaremos una invitación anticipada para unirte a OneBite Premium.
            </p>
            <Link href="/join">
              <Button
                size="lg"
                className="bg-amber-600 hover:bg-amber-700 text-white font-medium text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all"
              >
                Registrarme Ahora
              </Button>
            </Link>
            <section className="py-12 bg-gray-100">
  <div className="max-w-3xl mx-auto px-4">
    <h2 className="text-2xl font-bold mb-4 text-center">¿Qué te pareció OneBite?</h2>
    <p className="text-center mb-6 text-gray-600">Dejanos tus ideas, sugerencias o problemas. Queremos mejorar contigo.</p>
    <iframe
      src="https://tally.so/r/npZ8yq"
      width="100%"
      height="500"
      frameBorder="0"
      title="Formulario de Feedback"
    ></iframe>
  </div>
</section>
          </div>
        </div>
      </section>
    </main>
  )
}
