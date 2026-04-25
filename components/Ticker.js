import { TrendingUp, TrendingDown } from 'lucide-react';

const items = [
  { pair: 'EUR/USD',  price: '1.0842',    change: '+0.23%', up: true  },
  { pair: 'BTC/USDT', price: '67,412.50', change: '+1.87%', up: true  },
  { pair: 'XAU/USD',  price: '2,338.14',  change: '-0.42%', up: false },
  { pair: 'NAS100',   price: '18,945.20', change: '+0.68%', up: true  },
  { pair: 'GBP/USD',  price: '1.2674',    change: '-0.15%', up: false },
  { pair: 'ETH/USDT', price: '3,514.88',  change: '+2.34%', up: true  },
  { pair: 'USOIL',    price: '78.92',     change: '-1.10%', up: false },
  { pair: 'SPX500',   price: '5,218.40',  change: '+0.51%', up: true  },
];

export default function Ticker() {
  const loop = [...items, ...items];
  return (
    <div className="fixed inset-x-0 z-40 overflow-hidden bg-dark/90 backdrop-blur-md border-b border-white/[0.06]"
         style={{ top: 'var(--nav-h, 60px)', height: '36px' }}>
      <div className="flex animate-ticker whitespace-nowrap h-full items-center">
        {loop.map((it, i) => (
          <div key={i} className="flex items-center gap-3 px-6 border-r border-white/[0.05] shrink-0">
            <span className="font-mono text-[0.68rem] text-silver tracking-wider">{it.pair}</span>
            <span className="font-mono text-[0.68rem] text-white">{it.price}</span>
            <span className={`font-mono text-[0.68rem] flex items-center gap-1 ${it.up ? 'text-green' : 'text-red'}`}>
              {it.up
                ? <TrendingUp  className="w-3 h-3" />
                : <TrendingDown className="w-3 h-3" />}
              {it.change}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
