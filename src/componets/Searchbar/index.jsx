import React from'react';

function SearchBar(){
    return(
        <div className='flex gap-4 my-10 justify-center px-10'>
            <select className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md'>
            <option value="" disabled hidden selected> Job Role</option>
            <option value="iOS Developer">iOS Developer</option>
            <option value="Frontend Developer">Frontend Developer</option>
            <option value="Backend Developer">Backend Developer</option>
            <option value="Android Developer">Android Developer</option>
            <option value="Flutter Developer">Flutter Developer</option>
            <option value=".Net Developer">.Net Developer</option>
            <option value="java Developer">java Developer</option>
            <option value="Rect Developer">Rect Developer</option>
            <option value="Production Manager">Production Manager</option>
            <option value="Manufacturing Engineer">Manufacturing Engineer</option>
            <option value="Quality Control Inspector">Quality Control Inspector</option>
            <option value="Production Supervisor">Production Supervisor</option>
            <option value="Supply Chain Manager">Supply Chain Manager</option>
            <option value="Operations Manager">Operations Manager</option>
            <option value="Human Resources Manager">Human Resources Manager</option>
            <option value="Production Planner">Production Planner</option>
            <option value="Purchasing Manager">Purchasing Manager</option>
            <option value="Product Designer">Product Designer</option>
            <option value="Warehouse Manager">Warehouse Manager</option>
            <option value="Process Technician">Process Technician</option>
            <option value="Logistics Coordinator">Logistics Coordinator</option>
            <option value="Inventory Control Specialist">Inventory Control Specialist</option>
            <option value="Plant Manager">Plant Manager</option>
            <option value="Shift Incharge">Shift Incharge</option>
            <option value="Process Incharge">Process Incharge</option>
            <option value="Section Head">Section Head</option>
            </select>
            <select className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md'>
                <option value="" disabled hidden selected> Job Type</option>
                <option value="Full Time">Full Time</option>
                <option value="Part Time">Part Time</option>
                <option value="Internship">Internship</option>
                <option value="Contract">Contract</option>
              </select>
              <select className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md'>
              <option value="" disabled hidden selected> Location </option>
              <option value="Bangalore">Bangalore</option>
              <option value="Chennai">Chennai</option>
              <option value="mumbai">mumbai</option>
              <option value="Bhopal">Bhopal</option>
              <option value="Delhi">Delhi</option>
              <option value="Hyderabad">Hyderabad</option>
               <option value="Vizag">Vizag</option>
               <option value="Kolkata">Kolkata</option>
               <option value="Pune">Pune</option>
               <option value="Nagpur">Nagpur</option>
               <option value="Ahmedabad">Ahmedabad</option>
               <option value="Jaipur">Jaipur</option>
               <option value="Lucknow">Lucknow</option>
               <option value="Kochi">Kochi</option>
               <option value="Coimbatore">Coimbatore</option>
               <option value="Gurgaon">Gurgaon</option>
               <option value="Noida">Noida</option>
               <option value="Ghaziabad">Ghaziabad</option>
               <option value="Indore">Indore</option>
               <option value="Vadodara">Vadodara</option>
               <option value="Surat">Surat</option>
               <option value="Thane">Thane</option>
               <option value="Nashik">Nashik</option>
               <option value="Agra">Agra</option>
               <option value="Allahabad">Allahabad</option>
               <option value="Amritsar">Amritsar</option>
               <option value="Bareilly">Bareilly</option>
               <option value="Bhavnagar">Bhavnagar</option>
               <option value="Bikaner">Bikaner</option>
               <option value="Bilaspur">Bilaspur</option>
               <option value="Bokaro">Bokaro</option>
               <option value="Burdwan">Burdwan</option>
               <option value="Chandigarh">Chandigarh</option>
               <option value="Dehradun">Dehradun</option>
               <option value="Dhanbad">Dhanbad</option>
               <option value="Durgapur">Durgapur</option>
               <option value="Faridabad">Faridabad</option>
               <option value="Gangtok">Gangtok</option>
               <option value="Gaya">Gaya</option>
               <option value="Gwalior">Gwalior</option>
               </select>
               <select className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md'>
               <option value="" disabled hidden selected> Work Tpye</option>
               <option value="Remote">Remote</option>
               <option value="Onsite">Onsite</option>
               <option value="In-Office">In-Office</option>
               <option value="Hybrid">Hybrid</option>
               </select>
        <select className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md'>
               <option value="" disabled hidden selected> Expeience</option>
               <option value="Fresher 0-1 year">Fresher 0-1 year</option>
               <option value="Junior Level 1-3 years">Junior Level 1-3 years</option>
               <option value="Mid Level 3-6 years">Mid Level 3-6 years</option>
               <option value="Senior Level 6-10">Senior Level 6-10</option>
               <option value="Lead Level 10-15">Lead Level 10-15</option>
               <option value="Director Level 15+">Director Level 15+</option>
            </select>
            <button className='w-64 bg-blue-500 text-white font-bold py-3 rounded-md'>Search</button>
       </div>
    );
}

export default SearchBar;