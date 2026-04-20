'use client';
import { useState } from 'react';
import { CreditCard, Calendar, Clock, MapPin, Users, Fish, CheckCircle } from 'lucide-react';

export default function Home() {
  const [reservation, setReservation] = useState({ name: '', date: '', time: '', pax: '2' });
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState('idle'); // idle | processing | success

  const menuCategories = [
    {
      title: 'Empanadas',
      items: [
        { name: 'Pino', desc: 'Carne con cebolla, huevo duro, aceituna.', price: '5.0' },
        { name: 'Queso', desc: 'Empanada de queso fundido.', price: '3.5' },
        { name: 'Pino de Mariscos', desc: 'Mariscos con sofrito chileno.', price: '5.0' },
        { name: 'Queso, Pulpo & Chimichurri', desc: 'De la casa.', price: '6.0' }
      ]
    },
    {
      title: 'Sánguches Chilenos',
      items: [
        { name: 'Churrasco Marino', desc: 'Pescado frito en batido, ensalada chilena.', price: '11.0' },
        { name: 'Mechada Italiana', desc: 'Carne desmechada, tomate, aguacate, mayonesa.', price: '11.5' },
        { name: 'Completo Chileno', desc: 'Hot dog, tomate, aguacate, mayo.', price: '9.0' }
      ]
    },
    {
      title: 'Platos',
      items: [
        { name: 'Pescado Frito', desc: 'Pesca del día en batido chileno.', price: '12.0' },
        { name: 'Pulpo con Chimichurri', desc: 'Pulpo tierno sellado a la plancha.', price: '15.0' },
      ]
    },
    {
      title: 'Especialidades & Bebidas',
      items: [
        { name: 'Pisco Sour Cathedral', desc: 'El clásico chileno.', price: '8.5' },
        { name: 'Piscola Chilena', desc: 'Pisco con cola, hielo y limón.', price: '8.0' },
        { name: 'Estrella Galicia', desc: 'Caña: 3 | Pint: 5.2', price: '3-5' },
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
      <section style={{ height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: 'radial-gradient(circle at center, var(--primary-blue) 0%, var(--bg-dark) 80%)', padding: '20px', textAlign: 'center', position: 'relative' }}>
        <div style={{ position: 'absolute', top: '15%', opacity: 0.1 }}>
          <Fish size={300} color="var(--neon-orange)" />
        </div>
        <h1 className="neon-text-orange" style={{ fontSize: '4rem', marginBottom: '10px', zIndex: 10 }}>CALETA SAN PEDRO</h1>
        <p style={{ fontSize: '1.5rem', color: 'var(--text-muted)', marginBottom: '40px', zIndex: 10 }}>Desde Chile a tu paladar, en pleno corazón de BCN.</p>
        <div style={{ display: 'flex', gap: '20px', zIndex: 10 }}>
          <a href="#menu"><button className="btn-secondary">Explorar Menú</button></a>
          <a href="#reservas"><button className="btn-primary">Reservar Ahora</button></a>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" style={{ padding: '80px 5%', background: 'var(--bg-dark)' }}>
        <h2 className="neon-text-blue" style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '60px' }}>Nuestra Carta</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
          {menuCategories.map((cat, i) => (
            <div key={i} className="glass-panel" style={{ background: 'rgba(13, 33, 73, 0.4)' }}>
              <h3 className="neon-text-orange" style={{ fontSize: '1.5rem', marginBottom: '20px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '10px' }}>{cat.title}</h3>
              {cat.items.map((item, j) => (
                <div key={j} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
                  <div>
                    <h4 style={{ fontSize: '1.1rem', color: 'var(--text-light)', marginBottom: '4px' }}>{item.name}</h4>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{item.desc}</p>
                  </div>
                  <div style={{ fontWeight: 'bold', color: 'var(--neon-blue)', marginLeft: '15px' }}>{item.price}€</div>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <button className="btn-secondary" onClick={() => setShowPaymentModal(true)} style={{ display:'inline-flex', alignItems:'center', gap:'10px' }}>
            <CreditCard size={20} /> Probar Pasarela de Pago (Mock)
          </button>
        </div>
      </section>

      {/* Reservation Section */}
      <section id="reservas" style={{ padding: '80px 5%', background: 'linear-gradient(to bottom, var(--bg-dark) 0%, var(--primary-blue) 100%)', display: 'flex', justifyContent: 'center' }}>
        <div className="glass-panel" style={{ maxWidth: '600px', width: '100%', textAlign: 'center' }}>
          <h2 className="neon-text-orange" style={{ fontSize: '2rem', marginBottom: '15px' }}>Reserva tu mesa</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '30px' }}>Confirma al instante vía WhatsApp. Rápido y sin complicaciones.</p>
          
          <form onSubmit={handleReservationSubmit} style={{ textAlign: 'left' }}>
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
            <select className="input-field" value={reservation.pax} onChange={(e) => setReservation({...reservation, pax: e.target.value})}>
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
      </section>

      {/* Footer */}
      <footer style={{ padding: '30px', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.05)', color: 'var(--text-muted)', display:'flex', flexDirection:'column', alignItems:'center', gap:'10px' }}>
        <div style={{display:'flex', gap:'5px', alignItems:'center'}}><MapPin size={18} color="var(--neon-blue)"/> Barcelona, España</div>
        <p>© 2026 Caleta San Pedro. Mockup Design Demo.</p>
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
