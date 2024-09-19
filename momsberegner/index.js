const moms = 25;

function momsberegner(beloeb, moms) {
  console.log("Det fulde beløb med moms er ", (beloeb / 100) * moms + beloeb);
}

momsberegner(100, moms);
