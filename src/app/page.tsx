import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-yoga px-4 py-16 md:py-24 lg:py-32">
        <div className="container-yoga">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6">
              Find Your{' '}
              <span className="text-primary">Inner Peace</span>
            </h1>
            <p className="mb-8 text-lg text-text/80 md:text-xl">
              Welcome to Serenity Yoga, where tranquility meets transformation.
              Join our welcoming community and discover the power of yoga to
              nurture your body, mind, and spirit.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/classes" className="btn-primary px-8 py-3">
                Explore Classes
              </Link>
              <Link href="/book" className="btn-outline px-8 py-3">
                Book a Session
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="bg-white px-4 py-16 md:py-24">
        <div className="container-yoga">
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-12 md:grid-cols-2 md:items-center">
              {/* Image Placeholder */}
              <div className="aspect-square rounded-2xl bg-background flex items-center justify-center">
                <div className="text-center text-text/50">
                  <svg
                    className="mx-auto h-16 w-16 mb-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                    />
                  </svg>
                  <p className="text-sm">Studio Image</p>
                </div>
              </div>

              {/* Content */}
              <div>
                <h2 className="mb-4">
                  Your Journey to Wellness Begins Here
                </h2>
                <p className="mb-4 text-text/80">
                  At Serenity Yoga, we believe that yoga is for everyone.
                  Whether you&apos;re a complete beginner or an experienced
                  practitioner, our studio offers a supportive environment
                  where you can grow at your own pace.
                </p>
                <p className="mb-6 text-text/80">
                  Our experienced instructors guide you through carefully
                  crafted classes designed to improve flexibility, build
                  strength, reduce stress, and cultivate mindfulness.
                </p>
                <Link
                  href="/instructors"
                  className="inline-flex items-center font-medium text-primary hover:underline"
                >
                  Meet Our Instructors
                  <svg
                    className="ml-2 h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-background px-4 py-16 md:py-24">
        <div className="container-yoga">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-12">
              Why Choose Serenity Yoga?
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {/* Feature 1 */}
              <div className="card">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <svg
                    className="h-6 w-6 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                    />
                  </svg>
                </div>
                <h4 className="mb-2">Expert Instructors</h4>
                <p className="text-sm text-text/80">
                  Learn from certified instructors with years of experience in
                  various yoga disciplines.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="card">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <svg
                    className="h-6 w-6 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                    />
                  </svg>
                </div>
                <h4 className="mb-2">Flexible Schedule</h4>
                <p className="text-sm text-text/80">
                  Choose from morning, afternoon, and evening classes to fit
                  your busy lifestyle.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="card sm:col-span-2 lg:col-span-1">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <svg
                    className="h-6 w-6 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>
                </div>
                <h4 className="mb-2">Welcoming Community</h4>
                <p className="text-sm text-text/80">
                  Join a supportive community of yoga enthusiasts who encourage
                  and inspire each other.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary px-4 py-16 text-white md:py-24">
        <div className="container-yoga">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-white">
              Ready to Start Your Journey?
            </h2>
            <p className="mb-8 text-lg text-white/80">
              Book your first class today and experience the transformative
              power of yoga. New students get their first class free!
            </p>
            <Link
              href="/book"
              className="inline-block rounded-md bg-white px-8 py-3 font-medium text-primary transition-colors hover:bg-gray-100"
            >
              Book Your Free Class
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
