export const getWeatherArt = (condition) => {
  const art = {
    clear: `
    \\   /
     .-.
  ― (   ) ―
     \`-'
    /   \\`,
    clouds: `
     .--.
  .-(    ).
  (___.__)__)`,
    rain: `
     .-.
    (   ).
   (___(__)
    ' ' ' '
   ' ' ' '`,
    drizzle: `
     .-.
    (   ).
   (___(__)
    . . . .
   . . . .`,
    snow: `
     .-.
    (   ).
   (___(__)
    * * * *
   * * * *`,
    thunderstorm: `
     .-.
    (   ).
   (___(__)
    ⚡⚡⚡⚡
   ⚡⚡⚡⚡`,
    mist: `
    - - -
   - - - -
    - - -
   - - - -`,
    smoke: `
     ~~~
    ~~~~~
     ~~~
    ~~~~~`,
    haze: `
    ~ ~ ~
   ~ ~ ~ ~
    ~ ~ ~
   ~ ~ ~ ~`,
    dust: `
    . · .
   · . · .
    . · .
   · . · .`,
    fog: `
    ░░░
   ░░░░░
    ░░░
   ░░░░░`,
    sand: `
    · · ·
   · · · ·
    · · ·
   · · · ·`,
    ash: `
    ▒▒▒
   ▒▒▒▒▒
    ▒▒▒
   ▒▒▒▒▒`,
    squall: `
    >>>/
   >>>>/
    >>>/
   >>>>/`,
    tornado: `
    @)
   (@
    )@
   @)`
  }

  return art[condition] || art.clear
}