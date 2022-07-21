import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ShowCaseService {

  getDataApi(): Observable<any> {
    //TODO: Aqui podemos hacer http.get('api...')
    const data = [
      {
        name: "Character #1",
        price: 0.2,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${Math.floor(Math.random() * 100)}.svg`
      },
      {
        name: "Character #2",
        price: 0.1,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${Math.floor(Math.random() * 100)}.svg`
      },
      {
        name: "Character #3",
        price: 0.3,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${Math.floor(Math.random() * 100)}.svg`
      },
      {
        name: "Character #4",
        price: 0.4,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${Math.floor(Math.random() * 100)}.svg`
      },
      {
        name: "Character #5",
        price: 0.5,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${Math.floor(Math.random() * 100)}.svg`
      },
      {
        name: "Character #6",
        price: 0.6,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${Math.floor(Math.random() * 100)}.svg`
      },
      {
        name: "Character #7",
        price: 0.7,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${Math.floor(Math.random() * 100)}.svg`
      },
      {
        name: "Character #8",
        price: 0.8,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${Math.floor(Math.random() * 100)}.svg`
      },
      {
        name: "Character #9",
        price: 0.9,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${Math.floor(Math.random() * 100)}.svg`
      },
      {
        name: "Character #10",
        price: 0.9,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${Math.floor(Math.random() * 100)}.svg`
      },
      {
        name: "Character #11",
        price: 0.9,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${Math.floor(Math.random() * 100)}.svg`
      },
      {
        name: "Character #12",
        price: 0.9,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${Math.floor(Math.random() * 100)}.svg`
      }
    ];
    /*
    QYYBAC9D3J-eyJsaWNlbnNlSWQiOiJRWVlCQUM5RDNKIiwibGljZW5zZWVOYW1lIjoi6LaF57qnIOeoi+W6j+WRmCIsImFzc2lnbmVlTmFtZSI6IiIsImFzc2lnbmVlRW1haWwiOiIiLCJsaWNlbnNlUmVzdHJpY3Rpb24iOiIiLCJjaGVja0NvbmN1cnJlbnRVc2UiOmZhbHNlLCJwcm9kdWN0cyI6W3siY29kZSI6IklJIiwiZmFsbGJhY2tEYXRlIjoiMjAyMC0wMS0wNCIsInBhaWRVcFRvIjoiMjAyMS0wMS0wMyJ9LHsiY29kZSI6IkFDIiwiZmFsbGJhY2tEYXRlIjoiMjAyMC0wMS0wNCIsInBhaWRVcFRvIjoiMjAyMS0wMS0wMyJ9LHsiY29kZSI6IkRQTiIsImZhbGxiYWNrRGF0ZSI6IjIwMjAtMDEtMDQiLCJwYWlkVXBUbyI6IjIwMjEtMDEtMDMifSx7ImNvZGUiOiJQUyIsImZhbGxiYWNrRGF0ZSI6IjIwMjAtMDEtMDQiLCJwYWlkVXBUbyI6IjIwMjEtMDEtMDMifSx7ImNvZGUiOiJHTyIsImZhbGxiYWNrRGF0ZSI6IjIwMjAtMDEtMDQiLCJwYWlkVXBUbyI6IjIwMjEtMDEtMDMifSx7ImNvZGUiOiJETSIsImZhbGxiYWNrRGF0ZSI6IjIwMjAtMDEtMDQiLCJwYWlkVXBUbyI6IjIwMjEtMDEtMDMifSx7ImNvZGUiOiJDTCIsImZhbGxiYWNrRGF0ZSI6IjIwMjAtMDEtMDQiLCJwYWlkVXBUbyI6IjIwMjEtMDEtMDMifSx7ImNvZGUiOiJSUzAiLCJmYWxsYmFja0RhdGUiOiIyMDIwLTAxLTA0IiwicGFpZFVwVG8iOiIyMDIxLTAxLTAzIn0seyJjb2RlIjoiUkMiLCJmYWxsYmFja0RhdGUiOiIyMDIwLTAxLTA0IiwicGFpZFVwVG8iOiIyMDIxLTAxLTAzIn0seyJjb2RlIjoiUkQiLCJmYWxsYmFja0RhdGUiOiIyMDIwLTAxLTA0IiwicGFpZFVwVG8iOiIyMDIxLTAxLTAzIn0seyJjb2RlIjoiUEMiLCJmYWxsYmFja0RhdGUiOiIyMDIwLTAxLTA0IiwicGFpZFVwVG8iOiIyMDIxLTAxLTAzIn0seyJjb2RlIjoiUk0iLCJmYWxsYmFja0RhdGUiOiIyMDIwLTAxLTA0IiwicGFpZFVwVG8iOiIyMDIxLTAxLTAzIn0seyJjb2RlIjoiV1MiLCJmYWxsYmFja0RhdGUiOiIyMDIwLTAxLTA0IiwicGFpZFVwVG8iOiIyMDIxLTAxLTAzIn0seyJjb2RlIjoiREIiLCJmYWxsYmFja0RhdGUiOiIyMDIwLTAxLTA0IiwicGFpZFVwVG8iOiIyMDIxLTAxLTAzIn0seyJjb2RlIjoiREMiLCJmYWxsYmFja0RhdGUiOiIyMDIwLTAxLTA0IiwicGFpZFVwVG8iOiIyMDIxLTAxLTAzIn0seyJjb2RlIjoiUlNVIiwiZmFsbGJhY2tEYXRlIjoiMjAyMC0wMS0wNCIsInBhaWRVcFRvIjoiMjAyMS0wMS0wMyJ9XSwiaGFzaCI6IjE2MDgwOTA5LzAiLCJncmFjZVBlcmlvZERheXMiOjcsImF1dG9Qcm9sb25nYXRlZCI6ZmFsc2UsImlzQXV0b1Byb2xvbmdhdGVkIjpmYWxzZX0=-I7c5mu4hUCMxcldrwZEJMaT+qkrzrF1bjJi0i5QHcrRxk2LO0jqzUe2fBOUR4L+x+7n6kCwAoBBODm9wXst8dWLXdq179EtjU3rfJENr1wXGgtef//FNow+Id5iRufJ4W+p+3s5959GSFibl35YtbELELuCUH2IbCRly0PUBjitgA0r2y+9jV5YD/dmrd/p4C87MccC74NxtQfRdeUEGx87vnhsqTFH/sP4C2VljSo/F/Ft9JqsSlGfwSKjzU8BreYt1QleosdMnMK7a+fkfxh7n5zg4DskdVlNbfe6jvYgMVE16DMXd6F1Zhwq+lrmewJA2jPToc+H5304rcJfa9w==-MIIElTCCAn2gAwIBAgIBCTANBgkqhkiG9w0BAQsFADAYMRYwFAYDVQQDDA1KZXRQcm9maWxlIENBMB4XDTE4MTEwMTEyMjk0NloXDTIwMTEwMjEyMjk0NlowaDELMAkGA1UEBhMCQ1oxDjAMBgNVBAgMBU51c2xlMQ8wDQYDVQQHDAZQcmFndWUxGTAXBgNVBAoMEEpldEJyYWlucyBzLnIuby4xHTAbBgNVBAMMFHByb2QzeS1mcm9tLTIwMTgxMTAxMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAxcQkq+zdxlR2mmRYBPzGbUNdMN6OaXiXzxIWtMEkrJMO/5oUfQJbLLuMSMK0QHFmaI37WShyxZcfRCidwXjot4zmNBKnlyHodDij/78TmVqFl8nOeD5+07B8VEaIu7c3E1N+e1doC6wht4I4+IEmtsPAdoaj5WCQVQbrI8KeT8M9VcBIWX7fD0fhexfg3ZRt0xqwMcXGNp3DdJHiO0rCdU+Itv7EmtnSVq9jBG1usMSFvMowR25mju2JcPFp1+I4ZI+FqgR8gyG8oiNDyNEoAbsR3lOpI7grUYSvkB/xVy/VoklPCK2h0f0GJxFjnye8NT1PAywoyl7RmiAVRE/EKwIDAQABo4GZMIGWMAkGA1UdEwQCMAAwHQYDVR0OBBYEFGEpG9oZGcfLMGNBkY7SgHiMGgTcMEgGA1UdIwRBMD+AFKOetkhnQhI2Qb1t4Lm0oFKLl/GzoRykGjAYMRYwFAYDVQQDDA1KZXRQcm9maWxlIENBggkA0myxg7KDeeEwEwYDVR0lBAwwCgYIKwYBBQUHAwEwCwYDVR0PBAQDAgWgMA0GCSqGSIb3DQEBCwUAA4ICAQAF8uc+YJOHHwOFcPzmbjcxNDuGoOUIP+2h1R75Lecswb7ru2LWWSUMtXVKQzChLNPn/72W0k+oI056tgiwuG7M49LXp4zQVlQnFmWU1wwGvVhq5R63Rpjx1zjGUhcXgayu7+9zMUW596Lbomsg8qVve6euqsrFicYkIIuUu4zYPndJwfe0YkS5nY72SHnNdbPhEnN8wcB2Kz+OIG0lih3yz5EqFhld03bGp222ZQCIghCTVL6QBNadGsiN/lWLl4JdR3lJkZzlpFdiHijoVRdWeSWqM4y0t23c92HXKrgppoSV18XMxrWVdoSM3nuMHwxGhFyde05OdDtLpCv+jlWf5REAHHA201pAU6bJSZINyHDUTB+Beo28rRXSwSh3OUIvYwKNVeoBY+KwOJ7WnuTCUq1meE6GkKc4D/cXmgpOyW/1SmBz3XjVIi/zprZ0zf3qH5mkphtg6ksjKgKjmx1cXfZAAX6wcDBNaCL+Ortep1Dh8xDUbqbBVNBL4jbiL3i3xsfNiyJgaZ5sX7i8tmStEpLbPwvHcByuf59qJhV/bZOl8KqJBETCDJcY6O2aqhTUy+9x93ThKs1GKrRPePrWPluud7ttlgtRveit/pcBrnQcXOl1rHq7ByB8CFAxNotRUYL9IF5n3wJOgkPojMy6jetQA5Ogc8Sm7RG6vg1yow==
    */
    return of(data).pipe(
      delay(2000)
    )
  }
}
