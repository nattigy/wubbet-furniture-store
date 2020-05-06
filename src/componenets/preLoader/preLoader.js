import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

export function PreLoader() {
    return (
        <div className="preloading overflow-hidden">
            <CircularProgress/>
        </div>
    );
}
