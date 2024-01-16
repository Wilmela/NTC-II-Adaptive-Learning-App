import { Image } from "react-native";
import images from "../assets/images";

import {
  HeadText,
  SubHeadText,
  ParagraphText,
  BodyText,
  LessonImage,
} from "../components/Content";

const key = Math.floor(Math.random() * 99);

const BE_DATA = [
  {
    id: "LES-01-1",
    content: (
      <BodyText key={key}>
        <HeadText>INTRODUCTION TO BASIC ELECTRICITY</HeadText>
        <LessonImage imgUrl={images.BE} />
        <ParagraphText>
          Electricity is a form of energy involving the flow of elections. All
          matter is made up of atoms, which has a center called a nucleus. The
          nucleus contains positively charged particles called protons and
          uncharged particles called neutrons. The nucleus of an atom is
          surrounded by negatively charged particles called electrons. The
          negative charge of an electron is equal to the positive charge of a
          proton, and the number of electrons in an atom is usually equal to the
          number of protons.
          {"\n"}
          {"\n"}
          When the balancing force between protons and electrons is upset by an
          outside force, an atom may gain or lose an electron. And when
          electrons are “lost” from an atom, the free movement of these
          electrons constitutes an electric current.
        </ParagraphText>

        <SubHeadText>What is Electricity?</SubHeadText>
        <ParagraphText>
          Electricity is a type of energy that can build up in one place or flow
          from one place to another. When electricity gathers in one place it is
          known as static electricity (the word static means something that does
          not move); electricity that moves from one place to another is called
          current electricity.
        </ParagraphText>

        <SubHeadText>Current</SubHeadText>
        <ParagraphText>
          In electrical terms, is the rate of the flow of charge. The current in
          a conductor is measured by the amount of charge (number of electrons)
          the flows past a certain point in a unit of time: I = Q/t
          {"\n"}
          An ampere, or amp, is the unit for current. This is symbolized by A.
        </ParagraphText>
        <LessonImage imgUrl={images.current} />
      </BodyText>
    ),
  },

  {
    id: "LES-01-2",
    content: (
      <BodyText key={key}>
        <HeadText>Basic Electrical Units</HeadText>
        <SubHeadText>Basic Electrical Unit </SubHeadText>
        <ParagraphText>
          Electric power
          {"\n"}
          Voltage and current
          {"\n"}
          Resistance and resistor
          {"\n"}
          Capacitance and capacitor
        </ParagraphText>

        <SubHeadText>Electric Power: </SubHeadText>
        <ParagraphText>
          Electric power is the rate, per unit time, at which electrical energy
          is transferred by an electric circuit. It is the rate of doing work.
          In terms of an electric circuit, electrical power is the rate, per
          unit time, at which electrical energy is transferred by an electric
          circuit. The watt is the St unit of power defining the rate of energy
          conversion and it is equivalent to one joule per second.
          {"\n"}
          {"\n"}
          From the definition it can be seen that:
          {"\n"}W = V Q t{"\n"}
          {"\n"}
          Where: W = Power in watts
          {"\n"}V = Potential in volts
          {"\n"}I = Current in amps
          {"\n"}Q = Charge in coulombs
          {"\n"}t = time in seconds
        </ParagraphText>

        <SubHeadText>Voltage</SubHeadText>
        <ParagraphText>
          This is defined as the potential difference between two points of a
          conducting wire. It is used to measure EMF or potential difference. A
          volt is the amount of potential necessary to cause 1 coulomb to
          produce 1 joule of work. Voltage is the force that pushes the
          electrons through a wire and is often referred to as electrical
          pressure.
        </ParagraphText>
        <SubHeadText>Electromotive Force (EMF) </SubHeadText>
        <ParagraphText>
          The energy transferred per unit when one type of energy is converted
          into electrical energy. We have six most common types of EMF which
          are: friction, chemical, pressure, heat, light, magnetism.
        </ParagraphText>
        <LessonImage imgUrl={images.emf} />
        <ParagraphText />
      </BodyText>
    ),
  },

  {
    id: "LES-01-3",
    content: (
      <BodyText key={key}>
        <HeadText>Resistance and Capacitance</HeadText>
        <SubHeadText>Resistance and Resistors </SubHeadText>
        <ParagraphText>
          Resistance is the restriction of the flow of electrons. Resistance is
          the opposite of current. If the resistance in a circuit increases, the
          current will decrease. Resistance is designated with R and its unit is
          the ohm (Ω).
          {"\n"}A resistor is a device designed to produce resistance. Resistors
          can be used to limit current, divide voltage, or generate heat. There
          are two main types of resistors: fixed and variable. Fixed resistor
          have a certain amount of resistance and cannot be changed. Variable
          resistor are used when it is necessary to change the values of a
          resistor easily. The two main uses of a variable resistor are as a
          potentiometer and a rheostat.
        </ParagraphText>
        <LessonImage imgUrl={images.resistance} />
        <SubHeadText>Capacitor and Capacitance </SubHeadText>
        <ParagraphText>
          - Capacitor and Capacitance The capacitor is an electric component
          that has the ability to store energy in the form of electrical charges
          that creates a potential difference, which is a static voltage, much
          like a small rechargeable battery.
        </ParagraphText>
        <SubHeadText>Types of Capacitor </SubHeadText>
        <ParagraphText>
          1. Film Capacitor
          {"\n"}
          2. Ceramic Capacitor
          {"\n"}
          3. Electrolytic Capacitor
          {"\n"}
          4. Variable Capacitor
        </ParagraphText>
        <SubHeadText>Capacitance: </SubHeadText>
        <ParagraphText>
          the accumulation of charges in the conductors causes a potential
          difference across the capacitor. The amount of charge accumulated is
          called the charge holding capacity of the capacitor. This charge
          holding capacity is what is known as capacitance. The factors
          affecting capacitance are: surface area, distance, dielectric medium.
        </ParagraphText>
        <LessonImage imgUrl={images.capacitor} />
        <ParagraphText />
      </BodyText>
    ),
  },

  {
    id: "SUM-01-1",
    content: (
      <BodyText key={key}>
        <HeadText>Summary</HeadText>
        <LessonImage imgUrl={images.BE} />
        <ParagraphText>
          1. The S.I Unit of power is watt.
          {"\n"}
          2. Electrical pressure is also known as voltage. {"\n"}
          3. Conductance is reciprocal of resistance. {"\n"}
          4. The resistance of a conductor varies inversely to it's cross
          section area.
          {"\n"}
          5. The instrument used to measure alternating current is called a
          moving iron (attraction type) ammeter.
        </ParagraphText>
      </BodyText>
    ),
  },
];

const DI_DATA = [
  {
    id: "LES-02-1",
    content: (
      <BodyText key={key}>
        <HeadText>Introduction to Domestic Installation</HeadText>
        <LessonImage imgUrl={images.DI} />
        <ParagraphText>
          Domestic electrical installations are within the scope of the building
          regulations. All new domestic electrical installations, together with
          specific alterations and additions to current installations, will have
          to be inspected and comply with strict electrical safety performance
          standards. The standards cover the design, installation, inspection
          and testing of domestic electrical work and the provision of
          information.
        </ParagraphText>

        <SubHeadText>What is Domestic Installation?</SubHeadText>
        <ParagraphText>
          Means an installation in a private dwelling which is not used in any
          hotel or boarding house or for the purpose of carrying out any
          business, trade, profession or service; domestic installation means an
          electrical installation for a purpose that is not connected with a
          commercial purpose.
        </ParagraphText>
        <LessonImage imgUrl={images.domWiring2} />

        <SubHeadText>Domestic Surface Wiring </SubHeadText>
        <ParagraphText>
          Electrical wiring is a process of connecting cables and wires to the
          related devices such as fuse, switches, sockets, lights, fans etc to
          the main distribution board is a specific structure to the utility
          pole for continues power supply.
        </ParagraphText>
        <LessonImage imgUrl={images.domWiring} />
      </BodyText>
    ),
  },

  {
    id: "LES-02-2",
    content: (
      <BodyText key={key}>
        <HeadText>Types of Electrical House Wiring Systems</HeadText>
        <ParagraphText>
          1. Cleat Wiring: This wiring comprises of PVC insulated wires or
          ordinary VIR that are braided and compounded. They are held on walls
          and ceilings using porcelain cleats with groves, wood or plastic. It
          is a temporary wiring system, therefore making it unsuitable for
          domestic premises. Moreover, cleat wiring systems is rarely being used
          these days.
          {"\n"}
        </ParagraphText>
        <LessonImage imgUrl={images.cleat} />
        <ParagraphText>
          2. Casing and Capping Wiring: It was quite popular in the past but it
          is considered obsolete these days due to the popularity of the conduit
          and sheathed wiring system. The cables used in this electric wiring
          were PVC, VIR or any other approved insulated cables. The cables were
          carried through the wooden casing enclosures, where the casing was
          made of strip of wood with parallel grooves cut lengthwise for
          accommodating the cables.
          {"\n"}
          3. Batten Wiring: This is when a single electrical wire or a group of
          wires are laid over a wooden batten. The wires are held to the batten
          using a brass clip and spaced at an interval of 10 cm for horizontal
          runs and 15cm for vertical runs.
          {"\n"}
          4. Lead Sheathed Wiring: Lead sheathed wiring uses conductors which
          are insulated with VIR and are covered with an outer sheath of lead
          aluminum alloy which contains about 95% lead. The metal sheath gives
          protection to cables from mechanical damage, moisture and atmospheric
          corrosion.
          {"\n"}
          5. Conduit Wiring: There are two types of conduit wiring according to
          pipe installation.
          {"\n"}• Surface conduit wiring when GI or PVC conduits are installed
          on walls or proof, it is known as surface conduit wiring. The conduits
          are attached to the walls with a 2-hole strap and base clip at regular
          distance. Electrical wires are laid inside the conduits.
        </ParagraphText>
        <LessonImage imgUrl={images.surfaceCon} />
        <LessonImage imgUrl={images.con} />

        <ParagraphText>
          {"\n"}• Concealed Conduit wiring when the conduits are hidden inside
          the wall slots or chiseled brick wall, it is called concealed conduit
          wiring. Electrical wires are laid inside the conduits. This is popular
          since it is stronger and more aesthetically appealing.
          {"\n"}
          Circuit Protective Conductors (CPC) is used to provide protection from
          electric shock and to allow sufficient current to flow so the
          protective devices can trip. Green/Yellow is always and exclusively
          used to identify the protective conductor.
        </ParagraphText>
      </BodyText>
    ),
  },

  {
    id: "LES-02-3",
    content: (
      <BodyText key={key}>
        <HeadText>Illumination</HeadText>
        <ParagraphText>
          This definition determines the amount of light that covers a surface.
          If Ǿ is the luminous flux and S is the area of the given surface then
          the illuminance E is determined by E=Ǿ/S.
          {"\n"}
          The unit of illumination in SI system is lux. One lux (Ix) is the
          illuminance of 1m2 surface area uniformly lighted by 1lm of luminous
          flux.
          {"\n"}
          Lux is luminious flux per unit area. It is equal to one lumen per
          square meter 1Ix = 1 lm/m2 A lux matter is used for measuring
          illuminaces in work places.
        </ParagraphText>

        <SubHeadText>Luminance</SubHeadText>
        <ParagraphText>
          Luminance L is the luminous intensity emitted by the surface area of
          1cm2 (or 1 m2) of the light source. It is a photometric measure of the
          luminous intensity per unit area of the light traveling in a given
          direction.
        </ParagraphText>

        <SubHeadText>Luminous Flux</SubHeadText>
        <ParagraphText>
          Also known as luminous power is the measure of the perceived power of
          light It is the quality of the energy of the light emitted per second
          in all directions. SI Unit: Lumen (Im)
        </ParagraphText>
        <LessonImage imgUrl={images.luFlux} />

        <SubHeadText>Lamps</SubHeadText>
        <ParagraphText>
          A lamp is an energy converter. Although it may carry out secondary
          functions, its prime purpose is the transformation of electrical
          energy into visible electromagnetic radiation. There are many ways to
          create light. The standard method for creating general lighting is the
          conversion of electrical energy into light.
        </ParagraphText>

        <SubHeadText>Types of Lamps</SubHeadText>
        <LessonImage imgUrl={images.bulbs} />

        <ParagraphText>
          • Incandescent lamps
          {"\n"}• Tungsten halogen lamps
          {"\n"}• Fluorescent lamps
          {"\n"}• Compact fluorescent lamps
          {"\n"}• Mercury vapour lamps
          {"\n"}• Metal halide lamps lamps
          {"\n"}• High pressure sodium vapour lamps
          {"\n"}• Low pressure sodium vapour
          {"\n"}• LED lamps
        </ParagraphText>
      </BodyText>
    ),
  },

  {
    id: "SUM-02",
    content: (
      <BodyText key={key}>
        <HeadText>Summary</HeadText>
        <LessonImage imgUrl={images.DI} />

        <ParagraphText>
          When the wiring and lamps are not done properly or isn’t maintained
          well, it may lead to dangerous situations such as electrical fires.
          Therefore, it is important that you take a lot of care while
          installing electrical wires and lambs. Lighting or illumination is the
          deliberate use of light to achieve practical or aesthetic effects.
          Lighting includes the use of both artificial light sources like lamps
          and light fixtures, as well as natural illumination by capturing
          daylight. Daylighting (using windows, skylights, orlight shelves) is
          sometimes used as the main source of light during daytime in
          buildings. This can save energy in place of using artificial lighting,
          which represents a major component of energy consumption in buildings.
          Proper lighting can enhance task performance, improve the appearance
          of an area, or have positive psychological effects on occupants. 1.
          The simplest and cheapest wiring system is the cleat wiring system.{" "}
          {"\n"}
          2. According to (ISI) role, the maximum load in a lighting circuit
          should not exceed 800w. {"\n"}
          3. In CTS wiring, CTS stands for Cable Tire Shealthed. {"\n"}
          4. During electrical works, DRY WOOD usage avoids shock.
          {"\n"}
          5. Green and Yellow is the color of a protective conductor
        </ParagraphText>
      </BodyText>
    ),
  },
];

const II_DATA = [
  {
    id: "LES-03-1",
    content: (
      <BodyText key={key}>
        <HeadText>Introduction Industrial Installation</HeadText>
        <LessonImage imgUrl={images.IEI} />

        <ParagraphText>
          Industrial Electrical installation is related to the installation of
          industrial electrical machineries, electrical panels, industrial
          electrical machineries, electrical panels, industrial electrical
          safety, power supply systems, proper power distribution for different
          categories (production, utility, building), etc. it is related to
          production or manufacturing plants, stations, etc.
          {"\n"}
          {"\n"}
          Electric Motors provides a comprehensive overview of electric motors
          and the principles on which they operate. Electric motors use magnetic
          induction to turn electricity into mechanical motion.
        </ParagraphText>

        <SubHeadText>Types of Industrial Wiring</SubHeadText>
        <ParagraphText>
          1. Cleat Wiring: This type of wiring uses a system of cleats to secure
          insulated wires in place and lay them out in the electrical grid. The
          cleats are usually made from wood or porcelain and in two parts that
          you screw into place. The botton cleat (the one facing the wall) is
          grooved to allow space for wiring.
          {"\n"}
          {"\n"}
          2. Cap Tyre Sheathed Wiring: This is a type of cable which normally
          consists of a black outer sheath of ruber with several conductors
          inside. The rubber provides an abrasion-resistant,
          corrosion-resistant, waterproof, protective covering for an insulated
          electric cable.
          {"\n"}
          {"\n"}
          3. Lead Sheathed Wiring: In this system of wiring lead covered cables
          are used on a batten or sometimes without batten, so it is known as
          lead sheathed cable wiring. The wire is supported by means of the
          clips. An earth wire runs along to maintain the earth continuity. The
          wires can be single or twin core.
          {"\n"}
          {"\n"}
          4. Wooden Sheathed Wiring: Casing capping this wiring has been used
          extensively in the past, but since the introduction of concealed
          wiring, the demand for this has been very low. The cables used in this
          system are VIR (Vulcanized Indian Rubber) or PVC (Polyvinyl Chloride).
        </ParagraphText>
      </BodyText>
    ),
  },

  {
    id: "LES-03-2",
    content: (
      <BodyText key={key}>
        <HeadText>AC and DC Machines</HeadText>
        <ParagraphText>
          The motor which converts an alternating current into mechanical energy
          is known us air A.C. motor. Induction motors are the A.C. motors.
        </ParagraphText>
        <LessonImage imgUrl={images.ACDC} />
        <SubHeadText>Working Principle of A.C Motors</SubHeadText>
        <ParagraphText>
          Induction motor works on the principle that whenever a closed
          conductor is placed in a magnetic field, it produces a torque or
          induction motor works on the combined effect of electromagnetic
          induction and motor principle.
        </ParagraphText>

        <SubHeadText>Construction of A.C Motors</SubHeadText>
        <ParagraphText>
          The 3 phase induction motor mainly consists of two parts:
          {"\n"}
          1. Stator
          {"\n"}
          {"\n"}
          2. Rotor The stator is a static part and rotor is a rotating part,
          both are separated by a small air gap, which varies from o.4mm - 4mm
          depending on the rating of the motor.
        </ParagraphText>

        <SubHeadText>Types of A.C. Motor</SubHeadText>
        <ParagraphText>
          Following are the different types of A.C. motors:
          {"\n"}
          1. Inductors motors
          {"\n"}
          2. Synchronous motors
          {"\n"}
          3. Single-phase motors
          {"\n"}
          4. Three-phase motors
          {"\n"}
          5. Squirrel cage induction motor
          {"\n"}
          6. Phase wound motor or wound motor or slip-ring motor
        </ParagraphText>

        <SubHeadText>Advantages of A.C. Motors</SubHeadText>
        <ParagraphText>
          Following are the advantages of A.C motors:
          {"\n"}
          1. It can be available at low cost.
          {"\n"}
          2. It has speed variations.
          {"\n"}
          3. Low maintenance cost.
          {"\n"}
          4. A.C Motor has high power factor.
          {"\n"}
          5. It has reliable operations
          {"\n"}
          6. Simple in design.
        </ParagraphText>

        <SubHeadText>Disadvantages of A.C. Motors</SubHeadText>
        <ParagraphText>
          The following are disadvantages of AC motor.
          {"\n"}
          1. It will create eddy currents due to the production of a back EMF.
          {"\n"}
          2. Disability to operate at low speed.
          {"\n"}
          3. It has poor positioning control.
        </ParagraphText>

        <SubHeadText>Applications of A.C. Motors</SubHeadText>
        <ParagraphText>
          The following are the application of AC motors
          {"\n"}
          1. Squirrel Cage Motors a. These are used in industrial driver of
          water pumps, tube wells, lathes, drills etc. b. Double cage motors are
          used for drives of cranes, punch presses, lathes, drills etc.
          {"\n"}
          2. Phase wound motors a. Used where high staring torque is required b.
          Used for drives of line shafts, lifts, pumps, mills etc.
          {"\n"}
          3. Synchronous motors are used in compressors, paper mills, steel
          rolling industry.
          {"\n"}
          4. Single-phase motors are used in domestic, electrical appliances
          like washing machines refrigerators, grinders, blowers etc.
        </ParagraphText>
      </BodyText>
    ),
  },

  {
    id: "LES-03-3",
    content: (
      <BodyText key={key}>
        <SubHeadText>What is a DC Generator? </SubHeadText>
        <ParagraphText>
          A DC generator is an electrical machine whose main function is to
          convert mechanical energy into electricity. When the conductor slashes
          magnetic flux, an emf will be generated based on the electromagnetic
          induction principle of Faraday’s Laws. This electron motive force can
          cause a flow of current when the conductor circuit is closed.
          {"\n"}
          {"\n"}A Dc generator can also be used as a DC motor without changing
          its construction. Therefore, a DC motor, otherwise a DC generator, can
          be generally called a DC machine.
        </ParagraphText>
        <LessonImage imgUrl={images.DCGen} />
        <SubHeadText>Parts of A DC Generator </SubHeadText>
        <ParagraphText>
          1. Stator
          {"\n"}
          2. Armature windings
          {"\n"}
          3. Yoke
          {"\n"}
          4. Poles
          {"\n"}
          5. Pole shoe
          {"\n"}
          6. Commutator
          {"\n"}
          7. Brushes
        </ParagraphText>

        <SubHeadText>How Does a DC Generator Work?</SubHeadText>
        <ParagraphText>
          According to Faraday’s law of electromagnetic induction, we know that
          when a current carrying conductor is placed in a varying magnetic
          field, an emf is induced in the conductor. According to Fleming’s
          right-hand rule, the direction of the induced current changes whenever
          the direction of motion of the conductor changes. Let us consider an
          armature rotating clockwise and a conductor at the left moving
          upwards. When the armature completes a half rotation, the direction of
          the motion of the conductor will be reversed downward. Hence, the
          direction of the current every armature will be alternating. But with
          a split ring commutator, connections of the armature conductors get
          reversed when a current reversal occurs. Therefore, we get a
          unidirectional current at the terminals.
        </ParagraphText>

        <SubHeadText>Losses in DC Generators</SubHeadText>
        <ParagraphText>
          The input power is not fully transformed into the output power in a DC
          machine. In a DC machine, the losses are broadly classified into four
          types:
          {"\n"}• Copper Loss
          {"\n"}• Core losses or iron losses etc.
        </ParagraphText>
        <SubHeadText>Types of DC Generator</SubHeadText>
        <ParagraphText>
          The DC generator can be classified into two main categories as
          {"\n"}
          1. separately excited and
          {"\n"}
          2. self-excited.
        </ParagraphText>
        <SubHeadText>Application of DC Generators</SubHeadText>
        <ParagraphText>
          A few applications of DC generator are:
          {"\n"}• The separately excited type DC generators are used for power
          and lighting purposes
          {"\n"}• The series DC generator is used in arc lamps for lighting,
          stable current generator and booster.
          {"\n"}• DC generators are used to reimburse the voltage drop within
          Feeders.
          {"\n"}• DC generators are used to provide a power supply for hostels,
          lodges, officers, etc.
        </ParagraphText>
      </BodyText>
    ),
  },

  {
    id: "SUM-03",
    content: (
      <BodyText key={key}>
        <HeadText>Summary</HeadText>
        <LessonImage imgUrl={images.IEI} />
        <ParagraphText>
          SUMMARY The biggest mistake that most technicians make is believing
          that both domestic and Industrial Electrical Installations can be
          handled using the same techniques in the simplest of ways, Industrial
          Electrical Installations are much more complex forms of residential
          wiring. As a reliable call out service for all kinds of electrical
          work, Prime Electrics has a dedicated team of qualified electricians
          for both types of installations. But here are some key difference
          between the two. The basic principle of all residential wirings is
          that the red wires and black wires are called “hot” wires as they
          carry current from circuit breaker to the electrical box or any
          attached appliance. On the other hand, the white wires are known as
          “returns” as they bring current back to the circuit breaker from the
          electrical box or attached appliance.
          {"\n"}
          {"\n"}
          Additionally, a ground wire is also installed to cause electricity to
          pass through only in the event of short circuit to protect the
          attached fittings.
          {"\n"}
          {"\n"}
          1. Grooves in cleat wiring are made of porcelain.
          {"\n"}
          3. PVC insulated non sheeted single cables are most preferably use in
          industrial wiring.
          {"\n"}
          3. Bulbs in the street light are connected in parallel.
          {"\n"}
          4. Electric motor is a device that converts electric energy into
          mechanical energy.
          {"\n"}
          5. Electric motors uses a phenomenon called magnetic effect of
          current.
        </ParagraphText>
      </BodyText>
    ),
  },
];

const CJ_DATA = [
  {
    id: "LES-04-1",
    content: (
      <BodyText key={key}>
        <HeadText>Introduction to Cable Jointing</HeadText>
        <LessonImage imgUrl={images.CJ} />

        <ParagraphText>
          A joint structure for covering a joint between cables is provided in
          which an insulation structure extends over and beyond cut back ends of
          insulation layers of the cables, but terminates at a distance ahead of
          cut back ends of insulation shield layers of the cables. The
          insulation structure of the joint structure includes a multi-layered,
          heat shrinkable tube with its end beveled or “feathered”. In
          assembling the joint, the tube is positioned to overlie the cable
          conductors and the insulation layers of the cables and is shrunk there
          over so as to terminate at a distance from the cut back ends of the
          insulation shield layers of the cables.
        </ParagraphText>
        <LessonImage imgUrl={images.cj} />

        <SubHeadText>Three Types of Cable Joints</SubHeadText>
        <ParagraphText>
          There are three main types of electrical joints, also known as
          {"\n"}
          1.splices: The Western Union splice,
          {"\n"}
          2. the Tap Slice and
          {"\n"}
          3. the Fixture Splice.
        </ParagraphText>
        <LessonImage imgUrl={images.cj1} />
        <ParagraphText />
      </BodyText>
    ),
  },
  {
    id: "LES-04-2",
    content: (
      <BodyText key={key}>
        <HeadText>Insulating Material for Cable Requirement</HeadText>
        <ParagraphText>
          • High insulation resistance to avoid leakage current
          {"\n"}• High dielectric strength to avoid electrical breakdown of
          cable
          {"\n"}• Good mechanical properties (tenacity and elasticity). •Immune
          to attacks by acids and alkalies, over a range of temperature of about
          -18OC to 94OC
          {"\n"}• Non hydroscopic because the dielectric strength of any
          material goes very much down with the moisture content.
          {"\n"}• None inflammable
          {"\n"}• Low coefficient of thermal expansion
          {"\n"}
          {"\n"}
          Insulating Materials; the most commonly used insulating materials are
          butyl rubber, impregnated paper, PVC, XPLE, varnished cambric etc.
        </ParagraphText>
        <LessonImage imgUrl={images.insuMat} />
        <ParagraphText />
      </BodyText>
    ),
  },
  {
    id: "LES-04-3",
    content: (
      <BodyText key={key}>
        <HeadText>Bedding and Armouring</HeadText>
        <LessonImage imgUrl={images.bdA} />
        <ParagraphText>
          - Bedding is nothing but a layer of paper tape compounded with fibrous
          material provided over the metallic sheath. Bedding serves two purpose
          i.e., it protects the metallic sheath from corrosion due to moisture
          and it acts as adhesive to stick the metallic sheath and armouring. It
          also protects the metallic sheath from damages due to armouring.
          {"\n"}
          {"\n"}- Armouring is provided over bedding in order to provide good
          mechanical strength and to protect the cable from injuries during
          erection. It consists of layers of galvanized steel wire. In order to
          reduce the sheath loss, the wire is made up of high resistance
          material.
        </ParagraphText>
        <LessonImage imgUrl={images.bdA1} />
      </BodyText>
    ),
  },
  {
    id: "SUM-04",
    content: (
      <BodyText key={key}>
        <HeadText>Summary</HeadText>
        <LessonImage imgUrl={images.CJ} />
        <ParagraphText>
          There are varieties of cable jointing techniques. The joints can be
          made through twisting the wires, or using mechanical connectors such
          as crimps. A good joint should be electrically and mechanically
          stable., reliable and safe regardless of the method used. The
          connectors enable enables one to easily make reliable and safe
          connections for a wide range of applications and voltages. After
          making any joint, other than overhead cables, the insulation, armor,
          and outer sheath should be restored depending on the type of the
          cable.
          {"\n"}
          {"\n"}
          1. The insulating material for a cable should have :{"\n"}
          1. Low cost
          {"\n"}
          2. High dielectric strength
          {"\n"}
          3. High mechanical strength
          {"\n"}
          {"\n"}
          2. PVC Stands for Polyvinyl Chloride
          {"\n"}
          {"\n"}
          3. Armouring protects a cable against mechanical injury
          {"\n"}
          {"\n"}
          4. Insulation is used in cables?
          {"\n"}
          1. Varnished cambric
          {"\n"}
          2. Rubber
          {"\n"}
          3. Paper.
          {"\n"}
          5. The bedding on a cable does not consist of any of these:
          {"\n"}
          1. Hessian cloth.
          {"\n"}
          2. Jute.
        </ParagraphText>
      </BodyText>
    ),
  },
];

const BC_DATA = [
  {
    id: "LES-05-1",
    content: (
      <BodyText key={key}>
        <HeadText>Cell and Battery</HeadText>
        <ParagraphText>
          A cell is a single unit of device that converts chemical energy into
          electrical energy. A battery is a collection of cells that converts
          chemical energy into electrical energy.
        </ParagraphText>
        <LessonImage imgUrl={images.cellBattery} />
        <SubHeadText>Types of Cell or Batteries</SubHeadText>
        <ParagraphText>
          Primary Cell: This is one that cannot easily be recharged after one
          use, and are discarded following discharge. Most primary cells utilize
          electrolytes that are contained within absorbent material or a
          separator (i.e no free or liquid electrolyte). And are thus termed dry
          cells.
          {"\n"}
          {"\n"}A Secondary Cell: This is one that can be electrically recharged
          after use to their original pre-discharge condition, by passing
          current through the circuit in the opposite direction to the current
          during discharge.
        </ParagraphText>
      </BodyText>
    ),
  },
  {
    id: "LES-05-2",
    content: (
      <BodyText key={key}>
        <HeadText>Components of a Battery</HeadText>
        <LessonImage imgUrl={images.BC} />

        <LessonImage imgUrl={images.components} />
        <ParagraphText>
          - Cathode determines the capacity and voltage of the battery.
          {"\n"}- Anodes sends electrons through a wire
          {"\n"}- Electrolyte allows the movement of ions only separator the
          absolute barriers between cathode.
        </ParagraphText>
        <HeadText>Stages of Battery Charging </HeadText>
        <ParagraphText>
          1. The bulk charge
          {"\n"}
          2. The absorption charge
          {"\n"}
          3. The float charge
          {"\n"}
          4. The equalization stage
        </ParagraphText>
      </BodyText>
    ),
  },
  {
    id: "LES-05-3",
    content: (
      <BodyText key={key}>
        <HeadText>Battery Energy Storage System</HeadText>
        <ParagraphText>
          The battery energy storage systems are based on secondary batteries
          that can be charged and discharged many times without damage.
          Batteries are electrochemical devices and they store energy by
          converting electric power into chemical energy. This chemical energy
          is released again to produce power. There are a number of important
          battery energy storage systems, some well established, some new.
          Common types include the lead-acid battery, found in motor vehicles,
          nickel cadmium and nickel hydride batteries, and sodium sulfur and
          lithium ion batteries.
        </ParagraphText>
        <LessonImage imgUrl={images.bCharger} />
        <HeadText>Battery Charging Equipment</HeadText>
        <ParagraphText>
          1. Current Limiting Input Tester
          {"\n"}
          2. Volt-Ohmmeter
          {"\n"}
          3. Capacitor Analyzer
          {"\n"}
          4.Rectifier and Diode Tester etc.
        </ParagraphText>
      </BodyText>
    ),
  },
  {
    id: "SUM-05",
    content: (
      <BodyText key={key}>
        <HeadText>Summary</HeadText>
        <LessonImage imgUrl={images.BC} />
        <ParagraphText>
          1. The capacity of a battery is expressed in terms Ampere hour rating.
          {"\n"}
          2. The storage battery generally used in electric power station is
          Lead-acid battery.
          {"\n"}
          3. Trickle charger of a storage battery helps to Keep it fresh and
          fully charged.
          {"\n"}
          4. Battery charging equipment is generally installed:
          {"\n"}
          a. In well ventuated location.
          {"\n"}
          b. In clean and dry place.
          {"\n"}
          c. As near as practical to the battery being.
          {"\n"}
          5. Batteries are charged by:
          {"\n"}
          a. Rectifers.
          {"\n"}
          b. Engine generator.
          {"\n"}
          c. Motor generator sets.
        </ParagraphText>
      </BodyText>
    ),
  },
];

const WD_DATA = [
  {
    id: "LES-06-1",
    content: (
      <BodyText key={key}>
        <HeadText>Introduction to Winding of Electrical Machines</HeadText>
        <LessonImage imgUrl={images.WEM} />

        <ParagraphText>
          A DC shunt generator is one kind of DC generator where both the
          windings like armature & field are allied within the parallel
          connection. Here, the armature winding provides both the load & the
          field currents. For the excitation of DC generator, it needs a DC
          field current. The DC field current may be excited separately through
          a DC source like a battery so that the DC generator also supplies the
          required energy for the field current. DC shunt motor (also known as a
          shunt wound DC motor) is a type of self-excited
          {"\n"}
          {"\n"}
          DC motor is a type of self-excited DC motor where the field windings
          are shunted to or are connected in parallel to the armature winding of
          the motor. Since they are connected in parallel, the armature and
          field windings are exposed to the same supply voltage.
        </ParagraphText>
      </BodyText>
    ),
  },
  {
    id: "LES-06-2",
    content: (
      <BodyText key={key}>
        <HeadText>DC Shunt Generator and DC Shunt Motor</HeadText>
        <ParagraphText>
          This is the branch of engineering which deals with current conduction
          through a vacuum or gas or semiconductor. Electronics essentially
          deals with electronic devices and their utilization. An electronic
          device is that in which current flows through a vacuum or gas or
          semiconductor. Such devices have valuable properties which enable them
          to function and behave as the friend of man today.
        </ParagraphText>
        <LessonImage imgUrl={images.shuntGen} />
        <LessonImage imgUrl={images.shuntGen1} />
        <ParagraphText />
      </BodyText>
    ),
  },
  {
    id: "LES-06-3",
    content: (
      <BodyText key={key}>
        <SubHeadText>Flemings Right Hand and Left Hand Rule</SubHeadText>
        <LessonImage imgUrl={images.Fright} />
        <LessonImage imgUrl={images.Fleft} />
        <ParagraphText>
          Right hand rule states that if we arrange our thumb, forefinger and
          middle finger of the right-hand perpendicular to each other, then the
          thumb points towards the direction of the motion of the conductor
          relative to the magnetic field and the middle finger points towards
          the direction of the induced current.
          {"\n"}
          {"\n"}
          Left hand rule states that if we arrange our thumb, forefinger and
          middle finger of the left-hand perpendicular to each other, then the
          thumb points towards the direction of the force experienced by the
          conductor, the forefinger points towards the direction of the magnetic
          field and the middle finger points towards the direction for the
          electric current.
        </ParagraphText>

        <SubHeadText>Induction Generator </SubHeadText>
        <ParagraphText>
          An induction generator or asynchronous generator is a type of
          alternating current (AC) electrical generator that uses the principles
          of induction motors to produce electric power. Induction generators
          operate by mechanically turning their rotors faster than synchronous
          speed.
        </ParagraphText>
        <LessonImage imgUrl={images.indGen} />
      </BodyText>
    ),
  },
  {
    id: "SUM-06",
    content: (
      <BodyText key={key}>
        <HeadText>Summary</HeadText>
        <LessonImage imgUrl={images.WEM} />
        <ParagraphText>
          1. A load be shifted from one DC stunt generator to another running in
          parallel? by adjusting their field rheostat.
          {"\n"}
          2. Flemings right hand rule is used to find the direction of elf
          {"\n"}
          3. Induction generators deliver power at leading power factor .{"\n"}
          4. In case of de stunt motors, the regenerative braking is employed
          when the load has an overhauling characteristic
          {"\n"}
          5. When the direction of power flow reverses, a differentially
          compounded motor becomes cumulatively compounded generator
        </ParagraphText>
      </BodyText>
    ),
  },
];

export { BE_DATA, DI_DATA, II_DATA, BC_DATA, WD_DATA, CJ_DATA };
