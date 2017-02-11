import { IndexRoute, Route } from 'react-router'
import React from 'react'
import App from './components/App'
import Watch from './containers/Watch'
import Search from './containers/Search'
import NotFound from './containers/NotFound'

export default (
    <Route path="/" component={App} >
       <IndexRoute component={Search} />
       <Route path="/watch/:id" component={Watch} />
       <Route path="*" component={NotFound} />
    </Route>
)