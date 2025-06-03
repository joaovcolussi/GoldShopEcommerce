import React, { useState } from 'react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você adicionaria a lógica para enviar o email para seu backend
    setSubmitted(true);
    setEmail('');
  };

  return (
    <section className="newsletter">
      <div className="newsletter__container">
        <h2 className="newsletter__titulo">Receba Novidades</h2>
        <p className="newsletter__descricao">
          Inscreva-se para ser o primeiro a saber sobre nossas novas coleções e ofertas exclusivas.
        </p>
        
        {submitted ? (
          <div className="newsletter__sucesso">
            Obrigado por se inscrever! Em breve você receberá nossas novidades.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="newsletter__formulario">
            <div className="newsletter__campo">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Seu melhor e-mail"
                required
                className="newsletter__input"
              />
              <button type="submit" className="newsletter__botao">
                Inscrever-se
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

export default Newsletter;