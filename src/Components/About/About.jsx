function Sobre() {
  return (
    <section className="mx-auto  mt-32 flex w-full max-w-xs flex-col gap-4 md:max-w-3xl md:flex-row lg:max-w-5xl">
      <div className="bg-Sobre h-56 rounded-xl bg-cover bg-center shadow-xl md:h-auto md:w-1/2"></div>
      <div className="ml-auto flex flex-col gap-6 p-4 md:w-1/2">
        <h2 className="text-center text-4xl ">Nossa missão</h2>
        <p className="font-Inter text-sm text-neutral-600">
          Nossa missão é transformar empresas em líderes sustentáveis,
          promovendo práticas empresariais que respeitem o meio ambiente e
          beneficiem a sociedade. Através de consultorias personalizadas,
          ajudamos nossos clientes a integrar a sustentabilidade em suas
          operações, reduzindo impactos ambientais e promovendo um crescimento
          econômico responsável.
        </p>
      </div>
    </section>
  );
}

export default Sobre;
