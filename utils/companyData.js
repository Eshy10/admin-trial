const companyData = [
    {
        index: 1,
        id: "afadslfj4124l",
        name: "XYZ Music",
        logo: "/static/company-icon.jpg",
        onboardingDate: "2023-05-05T00:00:00.000Z", // timestamp
        contractLength: 32, // in months
        projectNo: 4,
        licenseCount: 20,
        usedLicenses: 12,
        description:
            "A professional feedback needed on a song that contains rap and afrobeat. A professional feedback needed on a song that contains rap and afrobeat.",
        location: "New York, Unites States",
        address: "123 Main Street Anytown, USA 12345",
        website: "xyzmusic.com",
        phoneNumber: "(816) 228-2620",
        email: "admin@xyzmusic.com",
        active: true,
    },
];

// Extend companyData to 3000 items
for (let i = 2; i <= 3000; i++) {
    const onboardingDate = new Date(2023, 4, i); // Months are 0-based in JavaScript Date object
    const isoDateString = onboardingDate.toISOString();

    companyData.push({
        index: i,
        id: `afadslfj${i}24l`,
        name: `Company ${i}`,
        logo: "/static/company-icon.jpg",
        onboardingDate: isoDateString,
        projectNo: 1 + i,
        contractLength: 32 + i,
        licenseCount: 20 + i,
        usedLicenses: 12 + i,
        description: `Description for Company ${i}`,
        location: `Location for Company ${i}`,
        address: `Address for Company ${i}`,
        website: `company${i}.com`,
        phoneNumber: `(${Math.floor(Math.random() * 900) + 100}) ${Math.floor(Math.random() * 900000) + 100000}`,
        email: `admin@company${i}.com`,
        active: i % 3 !== 0
    });
}

const usersData = [
    {
        index: 1,
        profilePicture: '/static/displayPicture.jpeg',
        name: "James Arthur",
        handle: "@JArthur",
        role: "Admin",
        dateJoined: "2023-05-05T00:00:00.000Z",
        addedBy: "Admin"
    }
];

const roles = ["Admin", "Team Member"]

// Extend usersData to 100 items
for (let i = 2; i <= 100; i++) {
    const dateJoined = new Date(2023, 4, i);
    const isoDateString = dateJoined.toISOString();

    usersData.push({
        index: i,
        profilePicture: `/static/img${i % 7 + 1}.jpeg`,
        dateJoined: isoDateString,
        name: "John Doe",
        handle: `@John_Doe`,
        role: roles[((i % 100) === 1 || (i % 100) === 2) ? 0 : 1],
        addedBy: "Admin",
    });
}

export { companyData, usersData };

