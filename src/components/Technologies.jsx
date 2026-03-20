import { FaNodeJs, FaPython, FaReact } from "react-icons/fa";
import {
  SiPostgresql,
  SiMongodb,
  SiRabbitmq,
  SiExpress,
  SiDjango,
  SiNumpy,
  SiPandas,
} from "react-icons/si";

export default function Technologies() {
  return (
    <section id="skills" className="section text-center">

      <h2 className="text-3xl text-blue-500 mb-10">
        Technologies
      </h2>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">

       <SkillGroup title="Backend">
  <FaNodeJs className="text-green-500" />
  <SiExpress className="text-gray-400" />
  <FaReact className="text-cyan-400" />
  <FaPython className="text-yellow-400" />
  <SiDjango className="text-green-600" />
</SkillGroup>

<SkillGroup title="Database">
  <SiPostgresql className="text-blue-500" />
  <SiMongodb className="text-green-500" />
</SkillGroup>

<SkillGroup title="Cloud">
  <SiRabbitmq className="text-[#FF6600]" />
</SkillGroup>

<SkillGroup title="Data / ML">
  <SiNumpy className="text-blue-400" />
  <SiPandas className="text-purple-400" />
</SkillGroup>
      </div>

    </section>
  );
}

function SkillGroup({ title, children }) {
  return (
    <div className="card p-6">

      <h3 className="text-lg font-semibold text-gray-300 mb-6 text-center">
        {title}
      </h3>

      <div className="flex flex-wrap justify-center gap-6 text-3xl">

        {Array.isArray(children)
          ? children.map((icon, i) => (
              <div key={i} className="skill-icon text-3xl">
                {icon}
              </div>
            ))
          : (
            <div className="skill-icon text-3xl">
              {children}
            </div>
          )}

      </div>

    </div>
  );
}