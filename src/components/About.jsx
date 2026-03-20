export default function About() {
  return (
    <section
      id="aboutme"
      className=" section section-alt px-6 sm:px-10 py-10 flex justify-center"
    >
      <div className="max-w-4xl w-full glass rounded-2xl overflow-hidden border border-gray-800 shadow-lg">
        {/* 🔝 IMAGE BANNER */}
        <div className="w-full overflow-hidden rounded-xl">
          <img
            src="/image.png"
            alt="banner"
            className="w-full h-[160px] sm:h-[220px] md:h-[300px] object-cover object-center"
          />
        </div>

        {/* 📄 CONTENT */}
        <div className="p-6 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
            About Me
          </h2>

          <div className="space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed">
            <p>
              I am a full-stack developer with experience in building scalable
              web applications using Node.js, Express, MongoDB, Django, and
              React. I have developed projects such as a Notes App, Task
              Management App, and a College Event Management Platform, focusing
              on clean architecture, usability, and real-world problem solving.
            </p>

            <p>
              Currently, I am exploring Cloud Computing and Machine Learning to
              expand my skill set and build intelligent, scalable solutions for
              modern applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
