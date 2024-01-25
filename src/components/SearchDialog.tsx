import { Button } from '@/components/ui/Button';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/Dialog';
import { Input } from '@/components/ui/Input';

export function SearchDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant='outline'
          className='text-gray-400 bg-gray-100 flex w-40'
        >
          Search city...
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Search Location</DialogTitle>
        </DialogHeader>
        <div className='grid gap-4 py-4'>
          <div className='flex w-full'>
            <Input
              id='Location'
              placeholder='Londrina, PR, Brazil'
              className='w-full'
            />
          </div>
        </div>
        <DialogFooter>
          <Button type='submit'>Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
