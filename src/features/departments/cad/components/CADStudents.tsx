import React from 'react';
import type { DepartmentData } from '../../shared/types';
import DepartmentAccordion from '../../../../components/common/DepartmentAccordion';
import ContentRenderer from '../../../../components/common/ContentRenderer';

interface CADStudentsProps {
    dept: DepartmentData;
}

const CADStudents: React.FC<CADStudentsProps> = ({ dept }) => {
    // Determine the items to display in the accordion.
    // We map over the data from dept.students.
    const items = dept.students?.map(item => ({
        title: item.title,
        content: <ContentRenderer content={item.content} />
    })) || [];

    return (
        <div>
            {/* Adding the heading to match the CAD department style */}
            <div className="bg-white py-2 lg:py-2">
                <DepartmentAccordion
                    title="STUDENTS"
                    items={[
                        {
                            title: "Computer Science and Engineering ( Data Science ) Students",
                            content: (
                                <DepartmentAccordion
                                    title=""
                                    items={items}
                                    defaultOpenIndex={-1}
                                />
                            )
                        }
                    ]}
                    defaultOpenIndex={0}
                />
            </div>
        </div>
    );
};

export default CADStudents;
