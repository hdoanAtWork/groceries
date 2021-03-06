export const notFoundError = (req: any, res, next) => {
    const err: any = new Error('Not founrd');
    err.status = 404; 
    next(err);
};

export const errorHandler = (err, req, res, next) => {
    return res.status(err.status || 500).json({
        message: err.message,
        status: err.status,
        stack: err.stack
    })
};