function solution(genres, plays) {
    var answer = [];
    var genresWithPlays = {};
    for(var i=0 ; i<genres.length ; i++) {
        if(genresWithPlays.hasOwnProperty(genres[i])) {
            genresWithPlays[genres[i]].push({'index': i, 'plays': plays[i]});
        } else {
            genresWithPlays[genres[i]] = [{'index': i, 'plays': plays[i]}];
        }
    }

    for(let [genre, plays] of Object.entries(genresWithPlays)) {
        genresWithPlays[genre] = plays.sort(function(a,b) {
                                            if(b.plays - a.plays > 0) return 1;
                                            else if(b.plays-a.plays == 0 ) a.index - b.index
                                            else return -1;
                                            });
    }
    
    var genresWithTotalPlays = [];
    for(let [genre, plays] of Object.entries(genresWithPlays)) {
        genresWithTotalPlays.push([genre,
    plays.reduce((accumulator, currentValue) => accumulator + currentValue.plays, 0)]);
    }
    
    genresWithTotalPlays.sort(function(a, b) {
        return b[1] - a[1];
    });
    
    var genresWithTotalPlaysObj = {};
    genresWithTotalPlays.forEach(function(item) {
        genresWithTotalPlaysObj[item[0]] = item[1];
    });
    console.log('genresWithTotalPlaysObj = ', genresWithTotalPlaysObj)
    
    for(let [genre, totalPlays] of Object.entries(genresWithTotalPlaysObj)) {
        if(genresWithPlays[genre].length == 1) {
            console.log('index = ',genresWithPlays[genre][0].index)
            answer.push(genresWithPlays[genre][0].index);
        } else {
            for(var i=0 ; i<2 ; i++) {
                answer.push(genresWithPlays[genre][i].index);
            }
        }
    }

    return answer;
}