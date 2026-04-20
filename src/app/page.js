'use client';
import { useState } from 'react';
import { CreditCard, Calendar, Clock, MapPin, Users, Fish, CheckCircle } from 'lucide-react';

export default function Home() {
  const [reservation, setReservation] = useState({ name: '', date: '', time: '', pax: '2' });
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState('idle'); // idle | processing | success

  const menuCategories = [
    {
      title: 'Menú de Medio Día (L-V)',
      img: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=500&q=80',
      items: [
        { name: 'Entrada + Fondo + Bebida', desc: 'Opciones: Empanada, Mechada, Pescado frito y más.', price: '14.0' }
      ]
    },
    {
      title: 'Momentos Caleta',
      img: 'https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6?auto=format&fit=crop&w=500&q=80',
      items: [
        { name: 'Ostra + Cava', desc: 'Perfecto para disfrutar del sabor del mar.', price: '5.0' },
        { name: '3 Ostras + Cava', desc: 'Disponible también con vino blanco.', price: '11.5' },
        { name: 'Picada Chilena', desc: '2 Pisco Sour + Sopaipillas con pebre fresco.', price: '15.0' }
      ]
    },
    {
      title: 'Imperdibles de la Caleta',
      img: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=500&q=80', 
      items: [
        { name: 'Pulpo con Chimichurri', desc: 'Pulpo sellado con tomates asados y guarnición.', price: '24.0' },
        { name: 'Chorribravas', desc: 'Nuestra versión chilena de las papas bravas con mechada y huevo poché.', price: '12.5' },
        { name: 'Mariscal Cevichado', desc: 'Mezcla refrescante de mariscos y salmón.', price: '17.0' }
      ]
    },
    {
      title: 'Combos Caleta',
      items: [
        { name: 'Combo Cervecero', desc: '3 cañas + Chorribravas', price: '19.0' },
        { name: 'Combo del Mar', desc: 'Jarra de sangría + Mariscal Cevichado + 4 Ostiones. (Para 3-4 personas)', price: '45.0' }
      ]
    },
    {
      title: 'Empanadas',
      img: 'https://images.unsplash.com/photo-1628191137573-dee64e727cb1?auto=format&fit=crop&w=500&q=80',
      items: [
        { name: 'Pino', desc: 'Carne con cebolla, huevo duro, aceituna.', price: '5.0' },
        { name: 'Queso', desc: 'Empanada de queso fundido.', price: '3.5' },
        { name: 'Queso, Pulpo & Chimichurri', desc: 'Especial de la casa.', price: '6.0' }
      ]
    },
    {
      title: 'Sánguches & Platos Chilenos',
      items: [
        { name: 'Churrasco Marino', desc: 'Pescado frito en batido, ensalada chilena.', price: '11.0' },
        { name: 'Mechada Italiana', desc: 'Carne desmechada, tomate, aguacate, mayonesa.', price: '11.5' },
        { name: 'Pescado Frito', desc: 'Pesca del día en batido chileno.', price: '12.0' }
      ]
    }
  ];

  const handleReservationSubmit = (e) => {
    e.preventDefault();
    const text = `Hola *Caleta San Pedro*! Quiero hacer una reserva:
Nombre: ${reservation.name}
Fecha: ${reservation.date}
Hora: ${reservation.time}
Personas: ${reservation.pax}`;
    // Link to WhatsApp
    window.open(`https://wa.me/34600000000?text=${encodeURIComponent(text)}`, '_blank');
  };

  const handlePayment = (e) => {
    e.preventDefault();
    setPaymentStatus('processing');
    setTimeout(() => {
      setPaymentStatus('success');
      setTimeout(() => {
        setShowPaymentModal(false);
        setPaymentStatus('idle');
      }, 2500);
    }, 2000);
  };

  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Navbar Minimal */}
      <nav style={{ padding: '20px 40px', background: 'rgba(5, 10, 20, 0.8)', backdropFilter: 'blur(10px)', position: 'fixed', top: 0, width: '100%', zIndex: 100, display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <h2 className="neon-text-blue" style={{ fontSize: '1.5rem', margin: 0, display:'flex', alignItems:'center', gap:'10px' }}><Fish size={24}/> Caleta San Pedro</h2>
        <div style={{ display: 'flex', gap: '20px' }}>
          <a href="#menu" style={{ color: 'var(--text-light)' }}>Menú</a>
          <a href="#reservas" style={{ color: 'var(--text-light)' }}>Reserva VIP</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{ height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundImage: 'linear-gradient(rgba(5, 10, 20, 0.7), rgba(5, 10, 20, 0.8)), url("/hero_bg.png")', backgroundSize: 'cover', backgroundPosition: 'center', padding: '20px', textAlign: 'center', position: 'relative' }}>
        <h1 className="neon-text-orange" style={{ fontSize: '4rem', marginBottom: '10px', zIndex: 10, textTransform: 'uppercase' }}>CALETA SAN PEDRO</h1>
        <p style={{ fontSize: '1.5rem', color: '#e2e8f0', marginBottom: '40px', zIndex: 10 }}>Desde Chile a tu paladar, en pleno corazón de BCN.</p>
        <div style={{ display: 'flex', gap: '20px', zIndex: 10 }}>
          <a href="#menu"><button className="btn-secondary">Explorar Menú</button></a>
          <a href="#reservas"><button className="btn-primary">Reservar Ahora</button></a>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" style={{ padding: '80px 5%', background: 'var(--bg-dark)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 className="neon-text-blue" style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '60px', textTransform: 'uppercase' }}>Nuestra Carta</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px', alignItems: 'stretch' }}>
            {menuCategories.map((cat, i) => (
              <div key={i} className="glass-panel" style={{ background: 'rgba(13, 33, 73, 0.4)', padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                {cat.img && <img src={cat.img} alt={cat.title} style={{ width: '100%', height: '220px', objectFit: 'cover' }} />}
                <div style={{ padding: '24px', flexGrow: 1 }}>
                  <h3 className="neon-text-orange" style={{ fontSize: '1.4rem', marginBottom: '20px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '10px' }}>{cat.title}</h3>
                  {cat.items.map((item, j) => (
                    <div key={j} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '18px' }}>
                      <div style={{ paddingRight: '15px' }}>
                        <h4 style={{ fontSize: '1.05rem', color: 'var(--text-light)', marginBottom: '4px' }}>{item.name}</h4>
                        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.4' }}>{item.desc}</p>
                      </div>
                      <div style={{ fontWeight: 'bold', color: 'var(--neon-blue)', whiteSpace: 'nowrap' }}>{item.price}€</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <button className="btn-secondary" onClick={() => setShowPaymentModal(true)} style={{ display:'inline-flex', alignItems:'center', gap:'10px' }}>
              <CreditCard size={20} /> Probar Modal de Pago (Mock)
            </button>
          </div>
        </div>
      </section>

      {/* Reservation & Location Section */}
      <section id="reservas" style={{ padding: '80px 5%', background: 'linear-gradient(to bottom, var(--bg-dark) 0%, var(--primary-blue) 100%)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '40px', justifyContent: 'center', alignItems: 'stretch' }}>
          
          {/* Location Info */}
          <div className="glass-panel" style={{ flex: '1 1 400px', background: 'rgba(5, 10, 20, 0.5)' }}>
            <h2 className="neon-text-blue" style={{ fontSize: '1.8rem', marginBottom: '25px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <MapPin size={24}/> Dónde estamos
            </h2>
            <div style={{ marginBottom: '20px' }}>
              <p style={{ color: 'white', fontWeight: 'bold', fontSize: '1.1rem' }}>Caleta San Pedro</p>
              <p style={{ color: 'var(--text-muted)', marginTop: '5px' }}>Carrer de Ejemplo 123<br/>08001 Barcelona, España</p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '30px' }}>
              <Clock size={20} color="var(--neon-orange)"/>
              <p style={{ color: 'var(--text-muted)' }}>Mar - Dom: 13:00 a 23:00</p>
            </div>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2993.4276718485293!2d2.1743558!3d41.3850639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a2fbc78ba4c1%3A0x8e87bd23bb0d037a!2sPlaza%20de%20Catalu%C3%B1a!5e0!3m2!1ses!2ses!4v1705350314050!5m2!1ses!2ses" 
              width="100%" height="250" style={{ border: 0, borderRadius: '12px' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>

          {/* Reservation Form */}
          <div className="glass-panel" style={{ flex: '1 1 400px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h2 className="neon-text-orange" style={{ fontSize: '2rem', marginBottom: '10px' }}>Reserva tu mesa</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '30px' }}>Confirma al instante vía WhatsApp. Rápido y sin complicaciones.</p>
            
            <form onSubmit={handleReservationSubmit} style={{ textAlign: 'left', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <input 
                type="text" 
                placeholder="Tu Nombre" 
                required
                className="input-field"
                value={reservation.name}
                onChange={(e) => setReservation({...reservation, name: e.target.value})}
              />
              <div style={{ display: 'flex', gap: '15px', marginBottom: '15px' }}>
                <select className="input-field" style={{ flex: 1, marginBottom: 0 }}
                  value={reservation.date} onChange={(e) => setReservation({...reservation, date: e.target.value})} required>
                  <option value="">Seleccionar Fecha</option>
                  <option value="Hoy">Hoy</option>
                  <option value="Mañana">Mañana</option>
                  <option value="Proximo Fin de semana">Próximo Finde</option>
                </select>
                <select className="input-field" style={{ flex: 1, marginBottom: 0 }}
                  value={reservation.time} onChange={(e) => setReservation({...reservation, time: e.target.value})} required>
                  <option value="">Hora</option>
                  <option value="13:30">13:30</option>
                  <option value="14:30">14:30</option>
                  <option value="20:30">20:30</option>
                  <option value="21:30">21:30</option>
                </select>
              </div>
              <select className="input-field" value={reservation.pax} onChange={(e) => setReservation({...reservation, pax: e.target.value})} style={{ marginBottom: '25px' }}>
                <option value="1">1 Persona</option>
                <option value="2">2 Personas</option>
                <option value="3">3 Personas</option>
                <option value="4+">4 o más</option>
              </select>
              <button type="submit" className="btn-primary" style={{ width: '100%', display:'flex', justifyContent:'center', alignItems:'center', gap:'10px' }}>
                <Users size={20} /> Solicitar Reserva por WhatsApp
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: '#03060c', borderTop: '1px solid rgba(255,255,255,0.05)', color: 'var(--text-muted)' }}>
        <div style={{ textAlign: 'center', padding: '30px' }}>
          <p>© 2026 Caleta San Pedro. Mockup Design Demo.</p>
        </div>
      </footer>

      {/* Payment Modal Mockup */}
      {showPaymentModal && (
        <div style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, 
          background: 'rgba(5, 10, 20, 0.85)', backdropFilter: 'blur(8px)',
          display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000,
          padding: '20px'
        }}>
          <div className="glass-panel" style={{ width: '100%', maxWidth: '400px', background: 'var(--bg-dark)', position:'relative' }}>
            <button 
              onClick={() => setShowPaymentModal(false)}
              style={{ position: 'absolute', top: '15px', right: '15px', background: 'transparent', border: 'none', color: 'white', fontSize: '1.2rem', cursor:'pointer' }}
            >✕</button>
            <h3 className="neon-text-blue" style={{ fontSize: '1.5rem', marginBottom: '20px', display:'flex', alignItems:'center', gap:'10px' }}>
              <CreditCard size={24}/> Pago Seguro
            </h3>
            
            {paymentStatus === 'idle' && (
              <form onSubmit={handlePayment}>
                <p style={{ color:'var(--text-muted)', marginBottom:'15px', fontSize:'0.9rem' }}>Realiza un pago seguro para confirmar un pedido o adelanto de reserva.</p>
                <input type="text" placeholder="Número de Tarjeta (Mock)" className="input-field" value="**** **** **** 1234" readOnly />
                <div style={{ display: 'flex', gap: '15px' }}>
                  <input type="text" placeholder="MM/YY" className="input-field" value="12/28" readOnly />
                  <input type="text" placeholder="CVC" className="input-field" value="***" readOnly />
                </div>
                <button type="submit" className="btn-primary" style={{ width: '100%' }}>Pagar 20.00€</button>
              </form>
            )}

            {paymentStatus === 'processing' && (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <div style={{ width: '40px', height: '40px', border: '4px solid var(--neon-blue)', borderTopColor: 'transparent', borderRadius: '50%', animation: 'spin 1s linear infinite', margin: '0 auto 20px' }}></div>
                <p>Procesando pago...</p>
                <style>{`@keyframes spin { 100% { transform: rotate(360deg); } }`}</style>
              </div>
            )}

            {paymentStatus === 'success' && (
              <div style={{ textAlign: 'center', padding: '40px 0', color: '#4ade80' }}>
                <CheckCircle size={60} style={{ margin: '0 auto 20px' }} />
                <h4 style={{ fontSize: '1.2rem', marginBottom:'10px' }}>¡Pago Exitoso!</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Gracias. Tu reserva ha sido confirmada.</p>
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
