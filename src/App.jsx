import { useState } from 'react'
import { Select } from './Select'
import skillsData from './Data.json'; // Import the JSON data

function App() {

    const [selects,setSelects]=useState([]);
    const [skills,setSkills] = useState(skillsData.skills);
    const [isEditing, setIsEditing] = useState(false);
    const handleSelectChange=(e,index)=>{
    setSelects([...selects,{
        id:index,
        text:e.target.value
    }])
      const updatedSelects = skills.filter((skill) => skill !== e.target.value);
      
      setSkills(updatedSelects);
    }
  return (
    <div className="flex justify-center items-center h-full min-h-screen text-center bg-green-50">
        <div className="mt-10 w-custom-600 h-auto flex flex-col gap-4  ">
        <h1 className="text-4xl text-center  text-blue-800 font-bold">Select Your top 5 tech skills</h1>
        <div className="overflow-auto flex justify-center h-[400px] bg-transparent sm:bg-white shadow-lg hover:shadow-xl transition-transform transform  border-gray-200 rounded-2xl">
        <div className="p-5 pt-8 flex  w-full gap-4">
            <div className=" w-5/6 flex flex-col gap-4">
                <div className="flex flex-col items-center gap-4 py-5">
                              <Select
                                    selects={selects}
                                    setSelects={setSelects}
                                    setSkills={setSkills}
                                    skills={skills}
                                    
                              />
                <select
                  className='p-1 py-3 rounded-xl w-5/6 text-gray-500' 
                  onChange={(e) => handleSelectChange(e, selects.length)}
                  value={0}
                >
                  <option value="0">Add Skill</option>
                  {skills.map((skill, index) => (
                    <option key={index} value={skill}>
                      {skill}
                    </option>
                  ))}
                </select>
            </div>    
                
            </div>
            <div className="flex-4 w-40  flex flex-col gap-4 text-start">
              <h3 className="text-blue-800">Suggested skills</h3>
              <ul>
                <li>+ HTML</li>
                <li>+ CSS</li>
                <li>+ Bootstrap</li>
                <li>+ TypeScript</li>
                <li>+ VueJs</li>
                <li>+ Angular</li>
                <li>+ Nodejs</li>
              </ul>
            </div>
          </div>

        </div>

      </div>

        
    </div>
   
  )
}

export default App
