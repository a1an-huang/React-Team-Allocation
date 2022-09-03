import { useState } from 'react';

const GroupedTeamMembers = ({ employees, selectedTeam, setTeam }) => {

    const groupTeamMembers = () => {
        let teams = []

        let teamAMembers = employees.filter((employee) => employee.teamName === 'TeamA');
        let teamA = { team: 'TeamA', members: teamAMembers, collapsed: selectedTeam === 'TeamA' ? false : true }
        teams.push(teamA)

        let teamBMembers = employees.filter((employee) => employee.teamName === 'TeamB');
        let teamB = { team: 'TeamB', members: teamBMembers, collapsed: selectedTeam === 'TeamB' ? false : true }
        teams.push(teamB)

        let teamCMembers = employees.filter((employee) => employee.teamName === 'TeamC');
        let teamC = { team: 'TeamC', members: teamCMembers, collapsed: selectedTeam === 'TeamC' ? false : true }
        teams.push(teamC)

        let teamDMembers = employees.filter((employee) => employee.teamName === 'TeamD');
        let teamD = { team: 'TeamD', members: teamDMembers, collapsed: selectedTeam === 'TeamD' ? false : true }
        teams.push(teamD)
        return teams;
    }

    const handleTeamClick = (e) => {
        let transformGroupData = groupedEmployees.map((groupedData) => groupedData.team === e.currentTarget.id ? { ...groupedData, collapsed: !groupedData.collapsed } : groupedData);
        setGroupedData(transformGroupData)
        setTeam(e.currentTarget.id)

    }

    const [groupedEmployees, setGroupedData] = useState(groupTeamMembers());

    return (
        <main className="container">
            {
                groupedEmployees.map((group) => {
                    return (
                        <div key={group.team} className='card mt-2' style={{ cursor: "pointer" }}>
                            <h4 id={group.team} className="card-header text-secondary bg-white" onClick={handleTeamClick}>
                                Team Name : {group.team}
                            </h4>
                            <div id={"collapse_" + group.team} className={group.collapsed === true ? "collapse" : ""}>
                                <hr />
                                {
                                    group.members.map((member) => {
                                        return (
                                            <div key={group.id} className="mt-2">
                                                <h5 className="card-title mt-2">
                                                    <span className="text-dark"> Full Name: {member.fullName}</span>
                                                </h5>
                                                <p>Designation: {member.designation}</p>
                                            </div>
                                        );
                                    })
                                }
                            </div>
                        </div>
                    )
                })
            }
        </main>
    )
}
export default GroupedTeamMembers