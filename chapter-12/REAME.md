- Async JS
> Governs how we perform tasks which take some time to complete
- Synchonous JS
> JS can run ONE statement at a time at top to bottom
> JS a single threaded language
> statem1 > statem2 > statem3 > statem4
 + statem3 - fetching data from db(takes time)
 + blocks the next line of code(stm4)
> Use Async: Idea
- Async
> Start something now and finish it later
> statem1 > statem2 > statem3 > statem4 -> callback(from state2 (takes time -> db))
>  What this means is that the brower takes that request and it handles it outside of the scope of single thread
> When done -> callback(rest of func) 
> None blocking

# ---------------------------------------- #
- HTTP Requests
> Make HTTP request to get data from another server
> We make these requests to API endpoints