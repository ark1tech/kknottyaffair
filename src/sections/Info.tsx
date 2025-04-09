import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import Blob from "@/components/Blob";
import PaperCard from "@/components/cards/PaperCard";

import Image from "next/image";
import church from "@p/backgrounds/church_bg.svg";
import leticia from "@p/backgrounds/leticia_bg.svg";

const blobColors = [
  "#71713b",
  "#7f7f63",
  "#7d8554",
  "#aea548",
  "#606748",
  "#a1a864",
];

const blobPaths = [
  `M 89.48964692785441,50 Q 89.48964692785441,50 88.63639831540272,56.13824476210263  Q 87.78314970295101,62.27648952420527 86.06644525872792,68.61651852595227  Q 84.34974081450483,74.95654752769927 78.76697252946343,78.4334335451164  Q 73.18420424442203,81.91031956253352 67.90338502832151,85.3792912798586  Q 62.622565812220984,88.8482629971837 56.31128290611049,90.3843865150603  Q 50,91.9205100329369 43.6759850015203,90.42357186613881  Q 37.3519700030406,88.92663369934074 31.7406949327902,85.89083431584965  Q 26.129419862539798,82.85503493235854 21.809862373778806,78.23735550294062  Q 17.490304885017814,73.6196760735227 13.954044790038441,68.2403587233148  Q 10.41778469505907,62.86104137310691 9.829379146533679,56.43052068655346  Q 9.240973598008289,50.00000000000001 10.155104556324705,43.6753139146512  Q 11.069235514641122,37.3506278293024 14.532009922742372,32.04873876383837  Q 17.994784330843622,26.746849698374348 22.900357794261552,23.099667369875  Q 27.805931257679482,19.452485041375652 32.443082539909426,14.844766685810175  Q 37.08023382213936,10.237048330244697 43.540116911069674,10.42423945999565  Q 49.99999999999999,10.611430589746604 56.54323929440331,10.167695438689986  Q 63.08647858880663,9.723960287633368 68.1874965752123,13.83503494519638  Q 73.28851456161794,17.946109602759392 76.85220148669299,22.923836572272236  Q 80.41588841176804,27.90156354178508 83.43817049808203,33.02742218177442  Q 86.46045258439601,38.15328082176376 87.9750497561252,44.07664041088188 Z`,
  `M 91.4980247585043,50 Q 91.4980247585043,50 90.4319829656584,56.39538482389635  Q 89.36594117281251,62.7907696477927 84.92431722285443,67.4688713393474  Q 80.48269327289634,72.1469730309021 77.50939417633985,77.95900534883883  Q 74.53609507978337,83.77103766677556 68.24473776792527,85.27987995500297  Q 61.95338045606718,86.78872224323038 55.97669022803359,88.13052250406756  Q 50,89.47232276490475 43.89072240594216,88.53858445771783  Q 37.78144481188431,87.60484615053093 31.987299620282563,85.18607898917195  Q 26.193154428680813,82.76731182781296 22.694231924795982,77.57411479778355  Q 19.19530942091115,72.38091776775414 16.27451398619297,67.14400820203727  Q 13.353718551474792,61.907098636320406 12.13003265331745,55.953549318160206  Q 10.906346755160108,50.00000000000001 11.378254410168307,43.80218312344128  Q 11.850162065176505,37.60436624688256 14.20058908899398,31.65112846713701  Q 16.551016112811453,25.697890687391457 21.901545735618868,22.19402924124435  Q 27.252075358426282,18.690167795097242 32.48942307529065,15.458526157067142  Q 37.72677079215502,12.226884519037043 43.863385396077504,9.924225673188552  Q 49.99999999999999,7.621566827340061 55.86773708995132,10.75174557145419  Q 61.73547417990265,13.88192431556832 67.73608710780098,15.60557976739214  Q 73.73670003569933,17.32923521921596 78.05687787046978,21.90296365888016  Q 82.37705570524022,26.47669209854436 85.69890763239552,31.89903937783891  Q 89.02075955955081,37.321386657133466 90.25939215902756,43.66069332856674 Z`,
  `M 88.29600639034906,50 Q 88.29600639034906,50 87.96754579685927,56.11484006538165  Q 87.63908520336949,62.2296801307633 84.07788172213313,67.20067234311531  Q 80.51667824089677,72.17166455546733 77.52518402811737,77.96969582987313  Q 74.53368981533797,83.76772710427895 68.5443914127427,86.20416508465688  Q 62.55509301014742,88.64060306503481 56.27754650507371,89.55080459456757  Q 50,90.46100612410032 43.754715287579096,89.45151300644028  Q 37.50943057515819,88.44201988878022 31.38756153200825,86.24293678124499  Q 25.265692488858306,84.04385367370978 20.556395814947315,79.42869430124885  Q 15.847099141036324,74.81353492878793 13.7734164449049,68.62902290238794  Q 11.699733748773475,62.44451087598796 9.837960129629934,56.22225543799398  Q 7.976186510486393,50.00000000000001 9.678852136963553,43.72604724136065  Q 11.381517763440712,37.45209448272129 15.432537140218813,32.640300244423756  Q 19.483556516996913,27.828506006126226 22.893654391646802,22.60670952122549  Q 26.30375226629669,17.384913036324754 31.659293163768485,13.710340799557564  Q 37.01483406124028,10.035768562790373 43.50741703062013,9.987816731772142  Q 49.99999999999999,9.93986490075391 56.23479041978783,10.781220617657944  Q 62.46958083957566,11.622576334561977 67.825086242692,14.858614543723121  Q 73.18059164580833,18.094652752884265 77.99068444324831,22.131746567946934  Q 82.80077724068829,26.168840383009606 86.41620005597865,31.5808888199833  Q 90.03162287126901,36.992937256957 89.16381463080904,43.496468628478496 Z`,
  `M 87.99988830777644,50 Q 87.99988830777644,50 87.94421418492811,56.15536646383963  Q 87.88854006207978,62.31073292767926 85.42826436368594,68.13168937790633  Q 82.96798866529208,73.9526458281334 78.9193164340402,79.09207542966122  Q 74.87064420278831,84.23150503118904 68.55764024455361,85.95831027414573  Q 62.24463628631891,87.68511551710243 56.122318143159454,89.11117443620043  Q 50,90.53723335529844 43.73316783335797,89.55594286716372  Q 37.46633566671594,88.574652379029 32.46738037898742,84.7933523615811  Q 27.468425091258897,81.0120523441332 22.553343862025166,77.26211541077524  Q 17.63826263279143,73.51217847741728 14.016067805129069,68.19049461927035  Q 10.393872977466707,62.86881076112343 9.369711488389644,56.434405380561714  Q 8.345549999312581,50.00000000000001 9.175365186633282,43.50244767810764  Q 10.005180373953984,37.00489535621527 14.23766689224665,32.048560453743654  Q 18.470153410539318,27.092225551272037 22.452671839411934,22.32902373859787  Q 26.43519026828455,17.5658219259237 31.93121845105292,14.435432936935374  Q 37.42724663382129,11.305043947947048 43.71362331691064,9.629393103966795  Q 49.99999999999999,7.953742259986541 55.922873526731024,10.748140784002043  Q 61.845747053462055,13.542539308017545 67.45078373193526,15.904462466750529  Q 73.05582041040846,18.26638562548351 78.71542291056576,21.645733881664114  Q 84.37502541072308,25.025082137844713 86.40502888204692,31.268391550442775  Q 88.43503235337076,37.51170096304084 88.2174603305736,43.75585048152042 Z`,
  `M 92.16681809323742,50 Q 92.16681809323742,50 90.60091070710033,56.34162071074893  Q 89.03500332096321,62.683241421497854 85.79707818904538,68.16942539666839  Q 82.55915305712753,73.65560937183892 77.834366043794,77.73160806953223  Q 73.10957903046047,81.80760676722554 67.4396638001969,84.01558408880064  Q 61.76974856993332,86.22356141037575 55.884874284966656,87.35394324266224  Q 50,88.48432507494873 44.02913259942514,87.61860283888001  Q 38.05826519885028,86.7528806028113 32.896108044977154,83.6997340183095  Q 27.73395089110403,80.64658743380771 22.748151228918612,77.03430501173072  Q 17.762351566733194,73.42202258965374 14.897004189575629,67.8793425623148  Q 12.031656812418063,62.336662534975865 11.671925573278497,56.168331267487936  Q 11.31219433413893,50.00000000000001 12.667344951772538,44.15510009459672  Q 14.022495569406146,38.310200189193424 15.206564559652758,31.94578306193938  Q 16.39063354989937,25.581365934685333 21.80466983992117,22.11280246349904  Q 27.218706129942973,18.644238992312747 32.060113905223986,14.165633953178018  Q 36.901521680505,9.687028914043289 43.4507608402525,9.106019200131719  Q 49.99999999999999,8.52500948622015 56.329024151853574,9.783771304565754  Q 62.65804830370715,11.042533122911358 68.65462140694721,13.556537340535659  Q 74.65119451018728,16.07054155815996 77.8172871048364,21.779899272572887  Q 80.9833796994855,27.489256986985815 84.73919113990468,32.49073622105102  Q 88.49500258032384,37.492215455116224 90.33091033678063,43.74610772755811 Z`,
  `M 88.31822609862445,50 Q 88.31822609862445,50 89.09245064464464,56.47673399638338  Q 89.86667519066484,62.95346799276676 85.70793913583208,67.93765287789526  Q 81.54920308099932,72.92183776302377 78.0404750653651,78.3434454399227  Q 74.53174704973088,83.76505311682165 68.66979505544424,86.59177042643535  Q 62.80784306115759,89.41848773604903 56.4039215305788,89.78174504592869  Q 50,90.14500235580834 44.082547967585924,88.28454588008924  Q 38.16509593517184,86.42408940437014 32.99398922514116,83.47413647936861  Q 27.822882515110482,80.52418355436708 23.169762988828367,76.69909050159143  Q 18.51664346254625,72.87399744881576 14.766320769446477,67.77033375589612  Q 11.015998076346705,62.66667006297647 9.482574713518758,56.33333503148824  Q 7.949151350690812,50.00000000000001 10.481871523306783,43.99135618439462  Q 13.014591695922753,37.98271236878923 15.760526753800931,32.550658758806605  Q 18.50646181167911,27.118605148823974 22.5508747391143,22.452391119617  Q 26.595287666549485,17.78617709041003 32.00324710686907,14.520927363896465  Q 37.41120654718865,11.255677637382902 43.70560327359432,10.499459840748163  Q 49.99999999999999,9.743242044113423 56.428083708253254,10.0880136175812  Q 62.85616741650651,10.432785191048978 68.70076571767511,13.324494962064406  Q 74.54536401884371,16.216204733079834 77.63583533568126,21.94611811074543  Q 80.72630665251882,27.676031488411024 85.44707213713728,32.312354945008714  Q 90.16783762175575,36.9486784016064 89.2430318601901,43.4743392008032 Z`,
];

export default function Info() {
  return (
    <>
      <div className="info-container">
        <FadeIn delay={0.2}>
          <PaperCard className="card-rotate-1 pt-[0.5rem] translate-y-[-0.5rem] rotate-[-1deg] overflow-hidden transition-transform hover:rotate-[0deg]">
            <div
              style={{
                position: "absolute",
                height: "100%",
                width: "100%",
                opacity: 0.4,
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  right: "-5rem",
                }}
              >
                <Image
                  src={church}
                  alt="church"
                  sizes="30vh"
                  priority
                  style={{
                    height: "auto",
                    width: "400px",
                  }}
                />
              </div>
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  height: "100%",
                  width: "100%",
                  background:
                    "linear-gradient(to bottom left, transparent 0%, white 75%)",
                }}
              ></div>
            </div>
            <div className="gap-title card-padding flex w-full flex-col px-6 py-8">
              <h2 className="deboss font-title-cursive font-[800] text-primary-light">
                The Wedding Venue
              </h2>
              <div className="gap-title mt-[1rem] flex flex-col">
                <div className="flex flex-col gap-[0.25rem]">
                  <h3 className="deboss font-serif font-[400] text-balance text-[#444444]">
                    St. Nicholas of Tolentine Parish Cathedral
                  </h3>
                  <p className="relative font-[400] text-[#838383]">
                    Cabanatuan City, Nueva Ecija
                  </p>
                </div>
                <a
                  className="link-underline relative flex w-fit flex-row items-center font-sans text-footnote font-[500] text-[#8da184] hover:brightness-115"
                  href="https://maps.app.goo.gl/wJ5AYjCtivtQ6mySA"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  View on Google Maps{" "}
                  <ChevronRight
                    size={15}
                    strokeWidth={2.5}
                    className="mt-[0.1rem] mr-[-0.3rem]"
                  />
                </a>
              </div>
            </div>
          </PaperCard>
        </FadeIn>

        <FadeIn delay={0.25}>
          <PaperCard className="card-rotate-2 pt-[0.5rem] translate-y-[1.5rem] rotate-[2deg] overflow-hidden transition-transform hover:rotate-[1deg]">
            <div
              style={{
                position: "absolute",
                height: "100%",
                width: "100%",
                opacity: 0.4,
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  right: "-5rem",
                }}
              >
                <Image
                  src={leticia}
                  alt="leticia"
                  sizes="20vh"
                  priority
                  style={{
                    height: "auto",
                    width: "400px",
                  }}
                />
              </div>
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  height: "100%",
                  width: "100%",
                  background:
                    "linear-gradient(to bottom left, transparent 0%, white 75%)",
                }}
              ></div>
            </div>
            <div className="gap-title card-padding flex w-full flex-col px-6 py-8">
              <h2 className="deboss font-title-cursive font-[800] text-primary-light">
                The Reception
              </h2>
              <div className="gap-title mt-[1rem] flex flex-col">
                <div className="flex flex-col gap-[0.25rem]">
                  <h3 className="deboss font-serif font-[400] text-balance text-[#444444]">
                    The Gardens, Lakewood Subdivision
                  </h3>
                  <p className="relative font-[400] text-[#838383]">
                    Cabanatuan City, Nueva Ecija
                  </p>
                </div>
                <a
                  className="link-underline relative flex w-fit flex-row items-center font-sans text-footnote font-[500] text-[#8da184] hover:brightness-115"
                  href="https://maps.app.goo.gl/2jogCRRkt1mocCoN9"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on Google Maps{" "}
                  <ChevronRight
                    size={15}
                    strokeWidth={2.5}
                    className="mt-[0.1rem] mr-[-0.3rem]"
                  />
                </a>
              </div>
            </div>
          </PaperCard>
        </FadeIn>
      </div>

      <div className="flex-col-center">
        <FadeIn className="dress-code-width w-full" delay={0.25}>
          <PaperCard
            className={cn(
              "gap-title flex w-full flex-col",
              "card-padding px-6 py-8",
              "rotate-[2deg] transition-transform hover:rotate-[1deg]"
            )}
          >
            <h2 className="deboss font-title-cursive font-[800] text-primary-light">
              The Dress Code
            </h2>
            <div className="gap-title mt-[1rem] flex flex-col">
              <div className="flex flex-col gap-[0.25rem]">
                <h3 className="deboss font-serif font-[400] text-balance text-[#444444]">
                  Semi-formal Attire
                </h3>
                <p className="relative font-[400] text-[#838383]">
                  Please come in your most comfortable attire in these shades
                </p>
                <div className="mt-[1rem] flex flex-row">
                  {blobColors.map((blob, index) => (
                    <Blob key={index} color={blob} blob={blobPaths[index]} />
                  ))}
                </div>
              </div>
            </div>
          </PaperCard>
        </FadeIn>
      </div>
    </>
  );
}
