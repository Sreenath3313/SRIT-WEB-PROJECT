import React from 'react';

const DepartmentOutcome: React.FC = () => {
    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h2 className="text-2xl font-bold text-neutral-900 uppercase">
                Outcome Based Education
            </h2>

            {/* Programme Outcomes */}
            <section>
                <h3 className="text-lg font-semibold text-[#FF5422] mb-4 uppercase tracking-wide">
                    Programme Outcomes (POs)
                </h3>
                <div
                    className="rounded-2xl overflow-hidden shadow-sm"
                    style={{ background: '#fdf0e6', border: '1px solid rgba(255,120,50,0.18)' }}
                >
                    {[
                        'Engineering Knowledge: Apply knowledge of mathematics, science and engineering to solve complex engineering problems.',
                        'Problem Analysis: Identify, formulate and analyze complex engineering problems using principles of mathematics, natural sciences and engineering sciences.',
                        'Design/Development of Solutions: Design solutions for complex engineering problems considering public health, safety, cultural, societal and environmental considerations.',
                        'Conduct Investigations of Complex Problems: Use research-based knowledge including design of experiments and analysis of data.',
                        'Modern Tool Usage: Create, select and apply appropriate techniques, resources and modern engineering tools for complex engineering activities.',
                        'The Engineer and Society: Apply reasoning informed by contextual knowledge to assess societal, health, safety, legal and cultural issues.',
                        'Environment and Sustainability: Understand the impact of professional engineering solutions in societal and environmental contexts.',
                        'Ethics: Apply ethical principles and commit to professional ethics, responsibilities and norms of engineering practice.',
                        'Individual and Team Work: Function effectively as an individual and as a member or leader in diverse teams.',
                        'Communication: Communicate effectively on complex engineering activities with the engineering community and society.',
                        'Project Management and Finance: Demonstrate knowledge and understanding of engineering management principles and apply them.',
                        'Life-long Learning: Recognize the need for and prepare oneself to engage in independent and life-long learning.',
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
                                {po}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Programme Specific Outcomes */}
            <section>
                <h3 className="text-lg font-semibold text-[#FF5422] mb-4 uppercase tracking-wide">
                    Programme Specific Outcomes (PSOs)
                </h3>
                <div
                    className="rounded-2xl overflow-hidden shadow-sm"
                    style={{ background: '#fdf0e6', border: '1px solid rgba(255,120,50,0.18)' }}
                >
                    {[
                        `Professional Skills: The ability to understand, analyze and develop computer programs in the areas related to algorithms, system software, multimedia, web design, big data analytics and networking for efficient design of computer-based systems of varying complexity.`,
                        `Problem-Solving Skills: The ability to apply standard practices and strategies in software project development using open-ended programming environments to deliver a quality product for business success.`,
                        `Successful Career and Entrepreneurship: The ability to employ modern computer languages, environments and platforms in creating innovative career paths to be an entrepreneur and a zest for higher studies.`,
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

            {/* Notice */}
            <p className="text-sm text-neutral-500 italic">
                Course Outcomes (COs) are defined per subject and are mapped to the POs and PSOs above through the department's curriculum framework.
            </p>
        </div>
    );
};

export default DepartmentOutcome;
