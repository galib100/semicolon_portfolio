import CeoImage from '../assets/mypic.jpg'
const CEOPage = () => {
  const ceoInfo = {
    name: 'Md Musanna Galib',
    title: 'CEO',
    bio:
      'Md Musanna Galib is the founder and CEO of Semicolon. With years of experience in cybersecurity, he leads the company to provide top-notch solutions for businesses worldwide.',
  };

  return (
      <section className="container mx-auto p-8 md:p-16">
        <div className="flex items-center space-x-6">
          <img
            src='/mypic.jpg' // Replace with the CEO's image path
            alt={ceoInfo.name}
            className="rounded-full w-32 h-32 md:w-40 md:h-40 border border-gray-300"
          />
          <div>
            <h1 className="text-3xl md:text-4xl font-semibold">{ceoInfo.name}</h1>
            <p className="text-gray-700">{ceoInfo.title}</p>
            <p className="text-gray-700 mt-4">{ceoInfo.bio}</p>
          </div>
        </div>
      </section>
  );
};

export default CEOPage;
