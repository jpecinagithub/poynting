// The original text of J. H. Poynting (1884), "On the Transfer of Energy in the
// Electromagnetic Field", Philosophical Transactions of the Royal Society of
// London, 175, 343–361. Public domain. Transcription: Wikisource.
// Reading edition: prose passages in full; passages whose meaning depends on
// the printed mathematical formulae (shown as figures in the transcription)
// are summarised by Poynting's own prose conclusions or omitted, as noted in
// the viewer.

export interface PaperSection {
  id: string
  heading: string
  paragraphs: string[]
}

export const paperTitle = 'XV. On the Transfer of Energy in the Electromagnetic Field.'
export const paperByline =
  'By J. H. Poynting, M.A., late Fellow of Trinity College, Cambridge, Professor of Physics, Mason College, Birmingham.'
export const paperComms = 'Communicated by Lord Rayleigh, M.A., D.C.L., F.R.S. — Received December 17, 1883, — Read January 10, 1884.'

export const paperSections: PaperSection[] = [
  {
    id: 'intro',
    heading: 'Introduction',
    paragraphs: [
      'A space containing electric currents may be regarded as a field where energy is transformed at certain points into the electric and magnetic kinds by means of batteries, dynamos, thermoelectric actions, and so on, while in other parts of the field this energy is again transformed into heat, work done by electromagnetic forces, or any form of energy yielded by currents.',
      'Formerly a current was regarded as something travelling along a conductor, attention being chiefly directed to the conductor, and the energy which appeared at any part of the circuit, if considered at all, was supposed to be conveyed thither through the conductor by the current.',
      'But the existence of induced currents and of electromagnetic actions at a distance from a primary circuit from which they draw their energy, has led us, under the guidance of Faraday and Maxwell, to look upon the medium surrounding the conductor as playing a very important part in the development of the phenomena.',
      'If we believe in the continuity of the motion of energy, that is, if we believe that when it disappears at one point and reappears at another it must have passed through the intervening space, we are forced to conclude that the surrounding medium contains at least a part of the energy, and that it is capable of transferring it from point to point.',
      'Upon this basis Maxwell has investigated what energy is contained in the medium, and he has given expressions which assign to each part of the field a quantity of energy depending on the electromotive and magnetic intensities and on the nature of the matter at that part. According to Maxwell’s theory, currents consist essentially in a certain distribution of energy in and around a conductor, accompanied by transformation and consequent movement of energy through the field.',
      'Starting with Maxwell’s theory, we are naturally led to consider the problem: How does the energy about an electric current pass from point to point — that is, by what paths and according to what law does it travel from the part of the circuit where it is first recognisable as electric and magnetic to the parts where it is changed into heat or other forms?',
    ],
  },
  {
    id: 'law',
    heading: 'The general law',
    paragraphs: [
      'The aim of this paper is to prove that there is a general law for the transfer of energy, according to which it moves at any point perpendicularly to the plane containing the lines of electric force and magnetic force, and that the amount crossing unit of area per second of this plane is equal to the product of the intensities of the two forces, multiplied by the sine of the angle between them divided by 4π, while the direction of flow of energy is that in which a right-handed screw would move if turned round from the positive direction of the electromotive to the positive direction of the magnetic intensity. After the investigation of the general law several applications will be given to show how the energy moves in the neighbourhood of various current-bearing circuits.',
    ],
  },
  {
    id: 'account',
    heading: 'How the law is obtained — the result in prose',
    paragraphs: [
      'The change per second in the sum of the electric and magnetic energies within a surface together with the heat developed by currents is equal to a quantity to which each element of the surface contributes a share depending on the values of the electric and magnetic intensities at the element. That is, the total change in the energy is accounted for by supposing that the energy passes in through the surface according to the law given by this expression.',
      'On interpreting the expression it is found that it implies that the energy flows as stated before, that is, perpendicularly to the plane containing the lines of electric and magnetic force, while the direction of flow is given by the three quantities, electromotive intensity, magnetic intensity, flow of energy, being in right-handed order.',
      'It follows at once that the energy flows perpendicularly to the lines of electric force, and so along the equipotential surfaces where these exist. It also flows perpendicularly to the lines of magnetic force, and so along the magnetic equipotential surfaces where these exist. If both sets of surfaces exist their lines of intersection are the lines of flow of energy.',
    ],
  },
  {
    id: 'app1',
    heading: 'Applications of the law — (1) A straight wire conveying a current',
    paragraphs: [
      'In this case very near the wire, and within it, the lines of magnetic force are circles round the axis of the wire. The lines of electric force are along the wire. A tangent plane to the surface at any point contains the directions of both the electromotive and magnetic intensities, and energy is therefore flowing in perpendicularly through the surface, that is, along the radius towards the axis.',
      'Across the ends no energy is flowing, for they contain no component of the electromotive intensity. The whole of the energy then enters in through the external surface of the wire, and by the general theorem the amount entering in must just account for the heat developed owing to the resistance, since if the current is steady there is no other alteration of energy.',
      'It seems then that none of the energy of a current travels along the wire, but that it comes in from the non-conducting medium surrounding the wire, that as soon as it enters it begins to be transformed into heat, the amount crossing successive layers of the wire decreasing till by the time the centre is reached, where there is no magnetic force, and therefore no energy passing, it has all been transformed into heat. A conduction current then may be said to consist of this inward flow of energy with its accompanying magnetic and electromotive forces, and the transformation of the energy into heat within the conductor.',
      'We have now to inquire how the energy travels through the medium on its way to the wire.',
    ],
  },
  {
    id: 'app2',
    heading: '(2) Discharge of a condenser through a wire',
    paragraphs: [
      'We shall first consider the case of the slow discharge of a simple condenser consisting of two charged parallel plates when connected by a wire of very great resistance, as in this case we can form an approximate idea of the actual path of the energy. Let A and B be the two plates of the condenser, A being positively and B negatively electrified. The chief part of the energy resides in the part of the dielectric between the two plates, but there will be some energy wherever there is electromotive intensity.',
      'While the discharge goes on a current flows round the connecting wire, and there is also an equal displacement current from B to A due to the yielding of the displacement there. The current will be encircled by lines of magnetic force, which will in general form closed curves embracing the circuit.',
      'Now, since the energy always moves perpendicularly to the lines of electromotive intensity it must travel along the equipotential surfaces. Since it also moves perpendicularly to the lines of magnetic force it moves, as we have seen in case (1), inwards on all sides to the wire, and is there all converted into heat. But between A and B the energy moves outwards from the space between the plates. As then the strain of the dielectric between A and B is gradually released by what we call a discharge current along the wire, the energy thus given up travels outwards through the dielectric, following always the equipotential surfaces, and gradually converges once more on the circuit where the surfaces are cut by the wire. There the energy is transformed into heat.',
    ],
  },
  {
    id: 'app3',
    heading: '(3) A circuit containing a voltaic cell',
    paragraphs: [
      'Suppose we have a simple copper, zinc, and acid cell producing a steady current. There is probably a considerable sudden rise in passing from the zinc to the acid, the place where the chemical energy is given up, a fall through the acid depending on the resistance, a sudden fall on passing from the acid to the copper, where some energy is absorbed, and then a gradual fall through the wire of the circuit round to the zinc again. The current, which travels round the circuit from zinc through acid to copper, is in opposition to the electromotive intensity between the zinc and acid, while the magnetic intensity is related to the current in the ordinary way. The energy will therefore pass outwards from there along the level surfaces. Some of this energy will converge on the acid, and there be converted into heat. Some of it will move along those surfaces which crowd in between the acid and copper. The rest spreads out to converge at last at different parts of the circuit, and there to be transformed into heat according to Joule’s law.',
      'Suppose that we are sending a current through a submarine cable by a battery with, say, the zinc to earth, and suppose that the sheath is everywhere at zero potential. Then the wire will everywhere be at higher potential than the sheath, and the level surfaces will pass from the battery through the insulating material to the points where they cut the wire. The energy then which maintains the current, and which works the needle at the further end, travels through the insulating material, the core serving as a means to allow the energy to get in motion.',
      'Again, when the only effect in a circuit is the generation of heat, we have energy moving in upon the wire, there undergoing some sort of transformation, and then moving out again as heat or light. We have in the electric light, for instance, the curious result that energy moves in upon the arc or filament from the surrounding medium, there to be converted into a form which is sent out again, and which, though still the same in kind, is now able to affect our senses.',
    ],
  },
  {
    id: 'app4',
    heading: '(4) Thermoelectric circuits',
    paragraphs: [
      'Let us first take the case of a circuit composed of two metals. Let us suppose the current at the hot junction flows from the metal A to the metal B. There is probably then a sudden rise in potential from A to B at the hot junction, a gradual fall along B, a sudden fall at the cold junction — less, however, than the sudden rise at the other — and a gradual fall along A. The heat at the hot junction is converted into electric and magnetic energy, which here moves outwards, since the current is against the electromotive intensity. Some of this energy converges upon B and A, to be converted into heat, according to Joule’s law, and some on the cold junction, there producing the Peltier heating effect.',
      'The Thomson effect may be considered in somewhat the same way. If we drive a current through an unequally heated metal, the energy moves outwards or inwards according as the electromotive intensity in the metal opposes or agrees with the direction of the current. If this is the true account of the Thomson effect it would appear that it should be described not as an absorption of heat or development of heat by the current but rather as a movement of energy outwards or inwards, according as the electromotive intensity in the unequally heated metal opposes or agrees with the direction of the current.',
    ],
  },
  {
    id: 'app5',
    heading: '(5) A circuit containing a motor',
    paragraphs: [
      'This case closely resembles the case of a circuit containing a copper-zinc cell, the motor playing a part analogous to that of the surface of contact of the acid with the copper. When the motor has no velocity all the level surfaces cut the circuit, and the energy leaving the dynamo or battery is all transformed into heat due to resistance. But if the motor is being worked the current diminishes, the level surfaces begin to converge on the motor and fewer cut the circuit. Some of the energy therefore passes into the motor, and is there transformed into work. As the velocity increases the number cutting the rest of the circuit decreases, and ultimately when the velocity of the motor becomes very great the current becomes very small. In the limit no level surface cuts the circuit, all converging on the motor. That is, all the energy passes into the motor when it is transformed into work, and the efficiency of the arrangement is perfect, though the rate of doing work is infinitely slow.',
    ],
  },
  {
    id: 'app6',
    heading: '(6) Induced currents',
    paragraphs: [
      'It is not so easy to form a mental picture of the movement of energy which takes place when the field is changing and induced currents are created. But we can see in a general way how these currents are accounted for. When there is a steady current in a field there is corresponding to it a definite distribution of energy. If there is a secondary circuit present, so long as the primary current is constant, there is no electromotive intensity in the secondary circuit. The energy neither moves into nor out of it, but streams round it somewhat as a current of liquid would stream round a solid obstacle. But if the primary current changes there is a redistribution of the energy in the field. While this takes place there will be a temporary electromotive intensity set up in the conducting matter of the secondary circuit, energy will move through it, and some of the energy will there be transformed into heat or work, that is, a current will be induced in the secondary circuit.',
    ],
  },
  {
    id: 'app7',
    heading: '(7) The electromagnetic theory of light',
    paragraphs: [
      'The velocity of plane waves of polarised light on the electromagnetic theory may be deduced from the consideration of the flow of energy. If the waves pass on unchanged in form with uniform velocity the energy in any part of the system due to the disturbance also passes on unchanged in amount with the same velocity.',
      'It may be noted that the velocity is the greatest velocity with which the two energies can be propagated together, and that they must be equal when travelling with this velocity.',
    ],
  },
  {
    id: 'conclusion',
    heading: 'Conclusion',
    paragraphs: [
      'The preceding examples will suffice to show that it is easy to arrange some of the known experimental facts in accordance with the general law of the flow of energy. I am not sure that there has hitherto been any distinct theory of the way in which the energy developed in various parts of the circuit has found its way thither, but there is, I believe, a prevailing and somewhat vague opinion that in some way it has been carried along the conductor by the current.',
      'I have therefore given several cases in considerable detail of the application of the mode of transfer of energy in current-bearing circuits according to the law given above, as I think it is necessary that we should realise thoroughly that if we accept Maxwell’s theory of energy residing in the medium, we must no longer consider a current as something conveying energy along the conductor. A current in a conductor is rather to be regarded as consisting essentially of a convergence of electric and magnetic energy from the medium upon the conductor and its transformation there into other forms. The current through a seat of so-called electromotive force consists essentially of a divergence of energy from the conductor into the medium. This mode of regarding the relations of the various parts of the circuit is, I am aware, very different from that usually given, but it seems to me to give us a better account of the known facts.',
      'It may seem at first sight that we ought to have new experimental indications of this sort of movement of energy, if it really takes place. We should look for proofs at points where the energy is transformed into other modifications, that is, in conductors. Now in a conductor, when the field is in a steady state, there is no electromotive intensity, and therefore no motion and no transformation of energy. The energy merely streams round the outside of the conductor, if in motion at all in its neighbourhood. Indeed, the fundamental equation describing the motion of energy is only a deduction from Maxwell’s equations, which are formed so as to express the experimental facts as far as yet known. We can hardly hope, then, for any further proof of the law beyond its agreement with the experiments already known until some method is discovered of testing what goes on in the dielectric independently of the secondary circuit.',
    ],
  },
]

// Flat paragraph index across sections, used by the annotation engine.
export interface FlatPara {
  sectionId: string
  index: number // global paragraph index
  text: string
}

export const flatParagraphs: FlatPara[] = (() => {
  const out: FlatPara[] = []
  let i = 0
  for (const s of paperSections) {
    for (const p of s.paragraphs) out.push({ sectionId: s.id, index: i++, text: p })
  }
  return out
})()

export const paraIndexBySection: Record<string, number[]> = (() => {
  const map: Record<string, number[]> = {}
  let i = 0
  for (const s of paperSections) {
    map[s.id] = s.paragraphs.map(() => i++)
  }
  return map
})()
