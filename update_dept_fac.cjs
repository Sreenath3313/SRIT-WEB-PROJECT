const fs = require('fs');
let file = fs.readFileSync('src/features/departments/shared/components/DepartmentFaculty.tsx', 'utf8');

const targetIndex = file.indexOf('    return (\r\n        <div className="bg-white');
const targetIndex2 = file.indexOf('    return (\n        <div className="bg-white');

const actualIndex = targetIndex !== -1 ? targetIndex : targetIndex2;

if (actualIndex !== -1) {
    const startStr = file.substring(0, actualIndex);
    const replacement = `    const defaultItems = [
        {
            title: 'Faculty Profiles',
            content: (
                <FacultyProfiles
                    faculty={dept.faculty}
                    title="Faculty Profiles"
                    subtitle={dept.fullName}
                    variant="default"
                />
            ),
        },
        ...(dept.facultyAccordions || []).map(acc => ({
            title: acc.title,
            content: <ContentRenderer content={acc.content} />
        }))
    ];

    return <DepartmentAccordion title="FACULTY" items={defaultItems} defaultOpenIndex={0} />;
};

export default DepartmentFaculty;
`;
    fs.writeFileSync('src/features/departments/shared/components/DepartmentFaculty.tsx', startStr + replacement);
    console.log('Success');
} else {
    console.log('Target string not found');
}
