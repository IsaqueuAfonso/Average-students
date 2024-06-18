let listOfStudents = [
  { name: "Ana", noteOne: 8.0, noteTwo: 7.5 },
  { name: "Bruno", noteOne: 6.0, noteTwo: 5.5 },
  { name: "Carla", noteOne: 9.0, noteTwo: 8.5 },
  { name: "Daniel", noteOne: 7.0, noteTwo: 7.0 },
  { name: "Eduarda", noteOne: 6.5, noteTwo: 7.5 },
]

function calculateAverage(noteOne, noteTwo) {
  let average = (noteOne + noteTwo) / 2
  return average
}

const minimumGrade = 7

for (let student of listOfStudents) {
  let name = student.name
  let averageGrade = calculateAverage(student.noteOne, student.noteTwo)
  let passOrFail = averageGrade >= minimumGrade

  alert(`
    O média do(a) aluno(a) ${name} é: ${averageGrade.toFixed(1)}
    ${
      passOrFail === true
        ? `Parabéns, ${name}! Você foi aprovado(a) no concurso`
        : `Não foi dessa vez, ${name}! Tente novamente`
    }
  `)
}
