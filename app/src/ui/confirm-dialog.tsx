import * as React from 'react'
import { Dispatcher } from '../lib/dispatcher'
import { ButtonGroup } from '../ui/lib/button-group'
import { Button } from '../ui/lib/button'
import { Dialog, DialogContent, DialogFooter } from '../ui/dialog'

interface IConfirmDialogProps {
  readonly dispatcher: Dispatcher
  readonly title: string
  readonly message: string
  readonly onConfirmation: () => void
}

export class ConfirmDialog extends React.Component<IConfirmDialogProps, void> {
  public constructor(props: IConfirmDialogProps) {
    super(props)
  }

  private cancel = () => {
    this.props.dispatcher.closePopup()
  }

  private onConfirmed = () => {
    this.props.onConfirmation()
    this.props.dispatcher.closePopup()
  }

  public render() {
    return (
      <Dialog
        title={this.props.title}
        onDismissed={this.cancel}
        onSubmit={this.onConfirmed}
      >
        <DialogContent>
          {this.props.message}
        </DialogContent>
        <DialogFooter>
          <ButtonGroup>
            <Button type='submit'>Yes</Button>
            <Button onClick={this.cancel}>No</Button>
          </ButtonGroup>
        </DialogFooter>
      </Dialog>
    )
  }
}
