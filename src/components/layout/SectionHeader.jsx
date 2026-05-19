export const SectionHeader = ({ label, title, center = true }) => (
  <div className={`section-header ${center ? 'text-center' : 'text-left'} mb-17`}>
    <p className="section-label text-xs font-bold tracking-widest uppercase text-gold mb-4">
      {label}
    </p>
    <h2 className="section-title text-4xl lg:text-5xl font-black uppercase tracking-wide">
      {title.split(' ').map((word, i) => (
        word.toLowerCase() === 'нас' || 
        word.toLowerCase() === 'работы' || 
        word.toLowerCase() === 'цен' ||
        word.toLowerCase() === 'красоту' ? (
          <span key={i} className="text-gold">{word} </span>
        ) : (
          <span key={i}>{word} </span>
        )
      ))}
    </h2>
    {/* <div className="w-15 h-0.75 bg-gold mx-auto mt-5 rounded" /> */}
  </div>
);