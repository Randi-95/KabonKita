import { ArrowLeft, Medal, ArrowRight, Lock, Unlock } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import AlertLogin from "../component/alertLogin";

const BadgeCard = ({ level, title, description, imageUrl, isUnlocked }) => {
  return (
    <div
      className={`
        flex items-center justify-between shadow-lg rounded-xl p-4
        transition-all duration-300 ease-in-out
        ${
          isUnlocked
            ? "bg-white/5 hover:bg-white/10 hover:scale-105 cursor-pointer"
            : "bg-black/20 filter grayscale"
        }
      `}
    >
      <div className="flex items-center gap-4 w-full">
        <div className="shadow-xl w-fit p-2 rounded-full bg-background border-2 border-secondary flex-shrink-0">
          <img src={imageUrl} alt={`Lencana ${title}`} className="w-14 h-14" />
        </div>

        <div className="w-full">
          <h2 className="font-bold text-xl text-gray-200">
            Level {level} <span className="text-yellow-400">{title}</span>
          </h2>
          <p className="text-gray-400 text-sm mt-1">{description}</p>

          <div className="mt-3 w-full bg-gray-700 rounded-full h-2">
            <div
              className={`
                h-2 rounded-full bg-yellow-400
                transition-all duration-700 ease-out
                ${isUnlocked ? "w-full" : "w-0"}
              `}
            ></div>
          </div>
        </div>
      </div>

      <div className="pl-4">
        {isUnlocked ? (
          <Unlock className="text-gray-300" size={30} />
        ) : (
          <Lock className="text-gray-500" size={30} />
        )}
      </div>
    </div>
  );
};

const badgeData = [
  {
    id: 1,
    minimal_point: 250,
    level: 1,
    title: "Pemula",
    description: "Capai 250 point untuk lencana ini",
    imageUrl: "/lencana1.png",
    isUnlocked: true,
  },
  {
    id: 2,
    minimal_point: 500,
    level: 2,
    title: "Penggiat",
    description: "Capai 500 point untuk lencana ini",
    imageUrl: "/lencana2.png",
    isUnlocked: true,
  },
  {
    id: 3,
    minimal_point: 1000,
    level: 3,
    title: "Pakar",
    description: "Capai 1000 point untuk lencana ini",
    imageUrl: "/lencana3.png",
    isUnlocked: false,
  },
  {
    id: 4,
    minimal_point: 2500,
    level: 4,
    title: "Master",
    description: "Capai 2500 point untuk lencana ini",
    imageUrl: "/lencana4.png",
    isUnlocked: false,
  },
  {
    id: 5,
    minimal_point: 5000,
    level: 5,
    title: "Avatar",
    description: "Capai 5000 point untuk lencana ini",
    imageUrl: "/lencana5.png",
    isUnlocked: false,
  },
];

function LencanaPage() {
  const { session, profile } = useAuth();

  if (!session) {
    return (
      <div className="w-full h-screen justify-center items-center">
        <AlertLogin />
      </div>
    );
  }

  const badgeStatus = (point, minimal_point) => {
    if (point >= minimal_point) {
      return true;
    }

    return false;
  };

  const badgeLevel = (point) => {
    let level = 0;

    if (point >= 5000) {
      level = 5;
    } else if (point >= 2500) {
      level = 4;
    } else if (point >= 1000) {
      level = 3;
    } else if (point >= 500) {
      level = 2;
    } else if (point >= 250) {
      level = 1;
    }

    return level;
  };

  return (
    <div className="flex min-h-screen bg-background text-gray-200">
      <main className=" flex-1 lg:w-3/4 p-4 flex flex-col gap-8">
        <header className="flex justify-between items-center">
          <Link
            to="/home"
            className="p-2 rounded-full hover:bg-white/10 transition-colors"
          >
            <ArrowLeft size={28} />
          </Link>
          <h1 className="font-semibold font-mono text-2xl tracking-wider">
            Lencana Randi
          </h1>
          <div className="p-2">
            <Medal size={28} className="text-yellow-400" />
          </div>
        </header>

        <section className="bg-secondary w-full flex-1 mt-10 rounded-t-3xl shadow-2xl md:mx-0">
          <div className="flex justify-center">
            <div className="w-28 h-28 border-4 border-secondary shadow-lg rounded-full p-2 bg-background -translate-y-1/2">
              <img
                src={`lencana${badgeLevel(profile?.points)}.png`}
                alt="Lencana Saat Ini"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="px-4 pb-4 -mt-10 flex flex-col gap-4">
            {badgeData.map((badge) => (
              <BadgeCard
                key={badge.id}
                level={badge.level}
                title={badge.title}
                description={badge.description}
                imageUrl={badge.imageUrl}
                isUnlocked={badgeStatus(profile?.points, badge.minimal_point)}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default LencanaPage;
