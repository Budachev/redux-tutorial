import { renderComponent , expect } from '../test_helper';
import CommentList from '../../src/components/comment_list';

describe('CommentList' , () => {
 	let component;
 	beforeEach(() => {
 		const props = { comments: ['new comment', 'other comment'] };
		component = renderComponent(CommentList, null, props);
 	});

    it('Shows an LI for reach comment', () => {
		expect(component.find('li').length).to.equal(2);
    });

    it('Shows each comment that is provided', () => {
    	// expect(component).to.have.text('new comment');
		expect(component).to.contain('new comment');
    	expect(component).to.contain('other comment');
    });
});
