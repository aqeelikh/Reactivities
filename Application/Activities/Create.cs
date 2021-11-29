using Domain;
using MediatR;
using Persistence;

namespace Application.Activities
{
    public class Create
    {
        //Create Command/Query class
        public class Command : IRequest
        {
            public Activity Activity { get; set; }
        }

        // Create Handler class
        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext context;
            public Handler(DataContext context)
            {
                this.context = context;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                context.Activities.Add(request.Activity);

                await context.SaveChangesAsync();
                
                return Unit.Value;
            }
        }
    }
}


/** Try this method structure later
(Modifier) (Return Type) (Method Name) (Parameters) 
{
    Modifier value{
        public,
        private
    }

}
 **/