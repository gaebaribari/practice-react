import React, { useState } from 'react';

export default function AppMentor() {
  const [person, setPerson] = useState({
    name: '엘리',
    title: '개발자',
    mentors: [
      {
        name: '밥',
        title: '시니어개발자',
      },
      {
        name: '제임스',
        title: '시니어개발자',
      },
    ],
  });

  const handleDelete = ()=>{
    const name = prompt(`삭제할 멘토의 이름을 작성해주세요`);
    setPerson({
      ...person,
      mentors: person.mentors.filter((mentor) => mentor.name !== name),
    })
  }

  const handleAdd = ()=> {
    const name = prompt(`추가할 멘토의 이름을 작성해주세요`);
    const title = prompt(`추가할 멘토의 하는 일을 작성해주세요`);
    setPerson({ 
      ...person, 
      mentors: [...person.mentors, { name, title }] })

  }

  const handleEdit = ()=> {
    const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
    const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);
    setPerson({ ...person, mentors: person.mentors.map((m) => m.name == prev ? { ...m, name: current } : m) })

  }

  return (
    <div>
      <h1>
        {person.name}는 {person.title}
      </h1>
      <p>{person.name}의 멘토는:</p>
      <ul>
        {person.mentors.map((mentor, index) => (
          <li key={index}>
            {mentor.name} ({mentor.title})
          </li>
        ))}
      </ul>
      <button onClick={handleEdit}>멘토의 이름을 바꾸기</button>
      <button onClick={handleAdd}>멘토 추가하기</button>
      <button onClick={handleDelete}>멘토 삭제하기</button>
    </div>
  );
}
