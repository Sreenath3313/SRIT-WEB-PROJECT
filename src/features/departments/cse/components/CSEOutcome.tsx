import React from 'react';
import type { DepartmentData } from '../../shared/types';
import DepartmentAccordion from '../../../../components/common/DepartmentAccordion';
import IframeWithLoader from '../../../../components/common/IframeWithLoader';

interface CSEOutcomeProps {
    dept: DepartmentData;
}

const CSEOutcome: React.FC<CSEOutcomeProps> = () => {
    return (
        <DepartmentAccordion
            title="OUTCOME BASED EDUCATION"
            items={[
                { 
                    title: 'Program Educational Objectives (PEOs)',
                    content: (
                        <div className="space-y-6 text-neutral-700">
                            <p className="font-bold text-neutral-900 text-lg">
                                An SRIT graduate in Computer Science & Engineering, after three to four years of graduation will:
                            </p>
                            <div className="space-y-4">
                                <div className="flex gap-4">
                                    <span className="font-bold text-[#FF5422] shrink-0">PEO 1:</span>
                                    <p>Lead a successful professional career in IT / ITES industry / Government organizations with ethical values.</p>
                                </div>
                                <div className="flex gap-4">
                                    <span className="font-bold text-[#FF5422] shrink-0">PEO 2:</span>
                                    <p>Become competent and responsible computer science professional with good communication skills and leadership qualities to respond and contribute significantly for the benefit of society at large.</p>
                                </div>
                                <div className="flex gap-4">
                                    <span className="font-bold text-[#FF5422] shrink-0">PEO 3:</span>
                                    <p>Engage in life-long learning, acquiring new and relevant professional competencies / higher academic qualifications.</p>
                                </div>
                            </div>
                        </div>
                    )
                },
                { 
                    title: 'Program Outcomes (POs) & Program Specific Outcome (PSOs)',
                    content: (
                        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                            {/* Programme Outcomes */}
                            <section>
                                <h3 className="text-lg font-semibold text-[#FF5422] mb-4 uppercase tracking-wide">
                                    Programme Outcomes (POs)
                                </h3>
                                <div
                                    className="rounded-xl overflow-hidden shadow-sm"
                                    style={{ background: '#fdf0e6', border: '1px solid rgba(255,120,50,0.18)' }}
                                >
                                    {[
                                        'Engineering Knowledge: Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialization to the solution of complex engineering problems.',
                                        'Problem Analysis: Identify, formulate, review research literature, and analyze complex engineering problems reaching substantiated conclusions using first principles of mathematics, natural sciences, and engineering sciences.',
                                        'Design / Development Of Solutions: Design solutions for complex engineering problems and design system components or processes that meet the specified needs with appropriate consideration for the public health and safety, and the cultural, societal, and environmental considerations.',
                                        'Conduct Investigations Of Complex Problems: Use research-based knowledge and research methods including design of experiments, analysis and interpretation of data, and synthesis of the information to provide valid conclusions.',
                                        'Modern Tool Usage: Create, select, and apply appropriate techniques, resources, and modern engineering and IT tools including prediction and modeling to complex engineering activities with an understanding of the limitations.',
                                        'The Engineer And Society: Apply reasoning informed by the contextual knowledge to assess societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to the professional engineering practice.',
                                        'Environment And Sustainability: Understand the impact of the professional engineering solutions in societal and environmental contexts, and demonstrate the knowledge of, and need for sustainable development.',
                                        'Ethics: Apply ethical principles and commit to professional ethics and responsibilities and norms of the engineering practice.',
                                        'Individual And Team Work: Function effectively as an individual, and as a member or leader in diverse teams, and in multidisciplinary settings.',
                                        'Communication: Communicate effectively on complex engineering activities with the engineering community and with society at large, such as, being able to comprehend and write effective reports and design documentation, make effective presentations, and give and receive clear instructions.',
                                        'Project Management And Finance: Demonstrate knowledge and understanding of the engineering and management principles and apply these to one’s own work, as a member and leader in a team, to manage projects and in multidisciplinary environments.',
                                        'Life-Long Learning: Recognize the need for, and have the preparation and ability to engage in independent and life-long learning in the broadest context of technological change.',
                                    ].map((po, i) => (
                                        <div
                                            key={i}
                                            className="flex items-start gap-0"
                                            style={{
                                                borderBottom: i < 11 ? '1px solid rgba(255,120,50,0.15)' : 'none',
                                            }}
                                        >
                                            <span
                                                className="flex items-center justify-center shrink-0 font-bold text-white text-sm"
                                                style={{
                                                    background: '#FF5422',
                                                    width: '52px',
                                                    minHeight: '52px',
                                                    alignSelf: 'stretch',
                                                }}
                                            >
                                                PO{i + 1}
                                            </span>
                                            <span
                                                style={{
                                                    width: '3px',
                                                    alignSelf: 'stretch',
                                                    background: 'rgba(255,84,34,0.25)',
                                                    flexShrink: 0,
                                                }}
                                            />
                                            <p className="flex-1 px-5 py-3.5 text-[14px] text-neutral-700 leading-relaxed">
                                                <strong>{po.split(':')[0]}:</strong> {po.split(':').slice(1).join(':').trim()}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Programme Specific Outcomes */}
                            <section>
                                <h3 className="text-lg font-semibold text-[#FF5422] mb-4 uppercase tracking-wide">
                                    Program Specific Outcomes (PSOs)
                                </h3>
                                <p className="mb-4 text-sm text-neutral-600 font-medium">
                                    At the end of the B. Tech program in Computer Science and Engineering, the graduate will be able to:
                                </p>
                                <div
                                    className="rounded-xl overflow-hidden shadow-sm"
                                    style={{ background: '#fdf0e6', border: '1px solid rgba(255,120,50,0.18)' }}
                                >
                                    {[
                                        'Design, implement, and test application software systems for desktop, web, and mobile platforms to meet the specified requirements.',
                                        'Use effectively and efficiently the functionality of systems software for building applications.',
                                        'Understand the organization and architecture of Computer Systems, Embedded Systems, and Networked Systems.',
                                    ].map((pso, i) => (
                                        <div
                                            key={i}
                                            className="flex items-start gap-0"
                                            style={{
                                                borderBottom: i < 2 ? '1px solid rgba(255,120,50,0.15)' : 'none',
                                            }}
                                        >
                                            <span
                                                className="flex items-center justify-center shrink-0 font-bold text-white text-sm"
                                                style={{
                                                    background: '#FF5422',
                                                    width: '52px',
                                                    minHeight: '52px',
                                                    alignSelf: 'stretch',
                                                }}
                                            >
                                                PSO{i + 1}
                                            </span>
                                            <span
                                                style={{
                                                    width: '3px',
                                                    alignSelf: 'stretch',
                                                    background: 'rgba(255,84,34,0.25)',
                                                    flexShrink: 0,
                                                }}
                                            />
                                            <p className="flex-1 px-5 py-3.5 text-[14px] text-neutral-700 leading-relaxed">
                                                {pso}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </div>
                    )
                },
                { 
                    title: 'Outcome Based Education Manual',
                    content: <IframeWithLoader src="https://docs.google.com/spreadsheets/d/18ktC4pddBtY3gNnklNml-4aPdRAfvQSV/pubhtml?widget=true&chrome=false&headers=false" style={{ width: '100%', height: '600px', border: 'none', borderRadius: '8px' }} />
                },
                { 
                    title: 'Attainment of Course Outcomes',
                    content: <IframeWithLoader src="https://docs.google.com/spreadsheets/d/1HZiKtupAOvOUY7a2EBsISpOhxnhJxxUG/pubhtml?widget=true&chrome=false&headers=false" style={{ width: '100%', height: '600px', border: 'none', borderRadius: '8px' }} />
                },
                { 
                    title: 'PO and PSO Attainment',
                    content: <IframeWithLoader src="https://docs.google.com/spreadsheets/d/1ysCPtPThnJ_vvn3bVXYQdvSIsV7cFOzC/pubhtml?widget=true&chrome=false&headers=false" style={{ width: '100%', height: '600px', border: 'none', borderRadius: '8px' }} />
                },
            ]}
        />
    );
};

export default CSEOutcome;
