export default function IndySkyline({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1200 260"
      preserveAspectRatio="none"
      className={className}
      role="img"
      aria-label="Stylized skyline of Indianapolis, Indiana, with the Soldiers' and Sailors' Monument at Monument Circle"
    >
      <g fill="currentColor">
        <rect x="0" y="160" width="70" height="100" />
        <rect x="78" y="130" width="55" height="130" />
        <rect x="140" y="175" width="45" height="85" />
        <rect x="192" y="110" width="60" height="150" />
        <rect x="260" y="150" width="40" height="110" />
        <rect x="308" y="95" width="65" height="165" />
        <rect x="382" y="140" width="50" height="120" />
        <rect x="440" y="165" width="42" height="95" />

        {/* Soldiers' & Sailors' Monument — centerpiece */}
        <g>
          <rect x="560" y="205" width="90" height="14" />
          <rect x="572" y="188" width="66" height="17" />
          <rect x="585" y="70" width="40" height="118" />
          <polygon points="585,70 605,30 625,70" />
          <rect x="601" y="14" width="8" height="20" />
          <circle cx="605" cy="10" r="5" />
        </g>

        <rect x="668" y="145" width="46" height="115" />
        <rect x="722" y="100" width="62" height="160" />
        <rect x="792" y="150" width="44" height="110" />
        <rect x="844" y="120" width="58" height="140" />
        <rect x="910" y="170" width="40" height="90" />
        <rect x="958" y="105" width="64" height="155" />
        <rect x="1030" y="150" width="46" height="110" />
        <rect x="1084" y="175" width="52" height="85" />
        <rect x="1144" y="140" width="56" height="120" />
      </g>
    </svg>
  );
}
